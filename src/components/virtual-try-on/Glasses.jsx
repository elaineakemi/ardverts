import { useRef, useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import * as threejs from 'three'
import * as tf from '@tensorflow/tfjs-core'
import '@tensorflow/tfjs-converter'
import '@tensorflow/tfjs-backend-webgl'
import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection'
import { useWindowSize } from '../../hooks/useWindowSize'
import { CANVAS_HEIGHT, CANVAS_WIDTH } from '../../utils/consts'

const GlassesTryOn = (props) => {
  const { image } = props
  const glassesImage = new URL(image, import.meta.url).href
  const webcamRef = useRef(null)
  const canvasRef = useRef(null)
  const [model, setModel] = useState(null)
  const [glassesMesh, setGlassesMesh] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const size = useWindowSize()
  const isLandscape = size.height <= size.width
  const ratio = isLandscape
    ? size.width / size.height
    : size.height / size.width

  const isMobile = () => {
    const minWidth = 768
    return window.innerWidth < minWidth || screen.width < minWidth
  }

  const canvasSize = isMobile()
    ? { width: size.width, height: size.height }
    : { width: CANVAS_WIDTH, height: CANVAS_HEIGHT }

  useEffect(() => {
    const loadResources = async () => {
      try {
        // Camera Access
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        })
        if (webcamRef.current) {
          webcamRef.current.srcObject = stream
        }

        // TensorFlow Model
        await tf.setBackend('webgl')
        const loadedModel = await faceLandmarksDetection.load(
          faceLandmarksDetection.SupportedPackages.mediapipeFacemesh,
          {
            shouldLoadIrisModel: true,
            maxFaces: 1,
            // returnTensors: false,
            // predictIrises: false
          },
        )
        setModel(loadedModel)

        // threejs Setup
        const width = canvasRef.current.clientWidth
        const height = canvasRef.current.clientHeight
        const scene = new threejs.Scene()
        const camera = new threejs.PerspectiveCamera(
          75,
          width / height,
          0.1,
          1000,
        )
        camera.position.z = 5
        const renderer = new threejs.WebGLRenderer({
          canvas: canvasRef.current,
          alpha: true,
        })
        renderer.setSize(width, height)
        renderer.setAnimationLoop(() => renderer.render(scene, camera))

        // Glasses Mesh
        const textureLoader = new threejs.TextureLoader()
        textureLoader.load(glassesImage, (texture) => {
          texture.colorSpace = threejs.SRGBColorSpace
          const geometry = new threejs.PlaneGeometry(2, 1)
          const material = new threejs.MeshBasicMaterial({
            map: texture,
            transparent: true,
          })
          const glasses = new threejs.Mesh(geometry, material)
          scene.add(glasses)
          setGlassesMesh(glasses)
        })
      } catch (error) {
        console.error('Initialization error:', error)
        setIsLoading(false)
      }
    }

    loadResources()
  }, [glassesImage])

  useEffect(() => {
    const detectAndPositionGlasses = async () => {
      if (!webcamRef.current || !model || !glassesMesh) return
      const { video } = webcamRef.current
      if (video.readyState !== 4) return

      const faceEstimates = await model.estimateFaces({ input: video })
      if (faceEstimates.length > 0) {
        setIsLoading(false)
        // Face mesh keypoints
        const keypoints = faceEstimates[0].scaledMesh
        const leftEye = keypoints[130]
        const rightEye = keypoints[359]
        const eyeCenter = keypoints[168]

        // Eye distance for glasses scaling
        const eyeDistance = Math.sqrt(
          (rightEye[0] - leftEye[0]) ** 2 + (rightEye[1] - leftEye[1]) ** 2,
        )
        const scaleMultiplier = eyeDistance / 140

        // Glasses scaling and offset values
        const scaleX = -0.01
        const scaleY = -0.01
        const offsetX = 0.0
        const offsetY = -0.01

        // Glasses positioning
        glassesMesh.position.x =
          (eyeCenter[0] - video.videoWidth / 2) * scaleX + offsetX
        glassesMesh.position.y =
          (eyeCenter[1] - video.videoHeight / 2) * scaleY + offsetY
        glassesMesh.scale.set(scaleMultiplier, scaleMultiplier, scaleMultiplier)
        glassesMesh.position.z = 1

        // Rotate glasses to align with eyes - rotation depth
        const eyeLine = new threejs.Vector2(
          rightEye[0] - leftEye[0],
          rightEye[1] - leftEye[1],
        )
        const rotationZ = Math.atan2(eyeLine.y, eyeLine.x)
        glassesMesh.rotation.z = rotationZ
      }
    }

    // Run detection and positioning every 120ms
    const intervalId = setInterval(() => {
      detectAndPositionGlasses()
    }, 120)

    return () => clearInterval(intervalId)
  }, [model, glassesMesh])

  return (
    <div style={{ position: 'relative', margin: '0 auto' }}>
      {isLoading && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2,
          }}
        >
          <h3>Loading...</h3>
        </div>
      )}
      <Webcam
        ref={webcamRef}
        autoPlay
        playsInline
        mirrored
        videoConstraints={{ facingMode: 'user', aspectRatio: ratio }}
        style={{ ...canvasSize }}
      />
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          ...canvasSize,
        }}
      />
    </div>
  )
}

export { GlassesTryOn }
