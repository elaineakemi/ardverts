/* eslint-disable react/no-unknown-property */
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const ModelDesk = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/desk.gltf')
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <group ref={group} {...props} dispose={null}>
      <group scale={1.43}>
        <mesh
          geometry={nodes.Cube007.geometry}
          material={materials.MetalBlack}
        />
        <mesh
          geometry={nodes.Cube007_1.geometry}
          material={materials.DeskWood}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/desk.gltf')
export { ModelDesk }
