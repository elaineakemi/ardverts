import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { ARButton, XR } from '@react-three/xr'
import { Typography } from '@mui/material'
import { ViewInAr as ViewInArIcon } from '@mui/icons-material'
import { XrHitModel } from './XrHitModel'
import './styles.css'

const XrHitModelContainer = ({ modelType }) => {
  const [arStatus, setArStatus] = useState()

  return (
    <>
      <ARButton
        sessionInit={{
          requiredFeatures: ['hit-test'],
        }}
        className={arStatus === 'exited' ? 'arButtonEnter' : 'arButtonExit'}
      >
        {(status) => {
          setArStatus(status)
          return status === 'exited' ? (
            <>
              <ViewInArIcon fontSize="large" />
              <Typography variant="body2" color="textSecondary">
                View in AR
              </Typography>
            </>
          ) : (
            ''
          )
        }}
      </ARButton>

      <Canvas>
        <XR>
          <XrHitModel modelType={modelType} />
        </XR>
      </Canvas>
    </>
  )
}
export { XrHitModelContainer }
