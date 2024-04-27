import { Canvas } from '@react-three/fiber'
import { ARButton, XR } from '@react-three/xr'
import { XrHitModel } from './XrHitModel'

const XrHitModelContainer = ({ modelType }) => (
  <>
    <ARButton
      sessionInit={{
        requiredFeatures: ['hit-test'],
      }}
    />

    <Canvas>
      <XR>
        <XrHitModel modelType={modelType} />
      </XR>
    </Canvas>
  </>
)

export { XrHitModelContainer }
