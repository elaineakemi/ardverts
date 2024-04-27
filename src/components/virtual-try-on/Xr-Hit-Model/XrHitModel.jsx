/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable indent */
/* eslint-disable react/no-unknown-property */
import { useRef, useState } from 'react'
import { OrbitControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { Interactive, useHitTest, useXR } from '@react-three/xr'
import { ModelTypes } from '../../../utils/consts'
import { ModelDesk } from './Models/Desk'
import { ModelGuitar } from './Models/Guitar'
import { ModelHeadphones } from './Models/Headphones'

const Model = (props) => {
  const { modelType } = props
  switch (modelType) {
    case ModelTypes.DESK:
      return <ModelDesk {...props} />
    case ModelTypes.GUITAR:
      return <ModelGuitar {...props} />
    case ModelTypes.HEADPHONES:
      return <ModelHeadphones {...props} />
    default:
      return null
  }
}

const XrHitModel = ({ modelType }) => {
  const reticleRef = useRef()
  const [models, setModels] = useState([])

  const { isPresenting } = useXR()

  useThree(({ camera }) => {
    if (!isPresenting) {
      camera.position.z = 3
    }
  })

  useHitTest((hitMatrix) => {
    hitMatrix.decompose(
      reticleRef.current.position,
      reticleRef.current.quaternion,
      reticleRef.current.scale,
    )

    reticleRef.current.rotation.set(-Math.PI / 2, 0, 0)
  })

  const placeModel = (e) => {
    const position = e.intersection.object.position.clone()
    const id = Date.now()
    setModels([{ position, id }])
  }

  return (
    <>
      <OrbitControls />
      <ambientLight />
      {isPresenting &&
        models.map(({ position, id }) => (
          <Model key={id} position={position} modelType={modelType} />
        ))}
      {isPresenting && (
        <Interactive onSelect={placeModel}>
          <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
            <ringGeometry args={[0.1, 0.25, 32]} />
            <meshStandardMaterial color="white" />
          </mesh>
        </Interactive>
      )}

      {!isPresenting && <Model modelType={modelType} />}
    </>
  )
}

export { XrHitModel }
