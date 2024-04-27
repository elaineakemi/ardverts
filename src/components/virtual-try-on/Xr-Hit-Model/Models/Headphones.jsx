/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const ModelHeadphones = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/headphones.gltf')
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <group ref={group} {...props} dispose={null}>
      <group scale={0.25}>
        <mesh
          geometry={nodes.Ear_Cup.geometry}
          material={nodes.Ear_Cup.material}
        />
        <mesh geometry={nodes.Cushion.geometry} material={materials.Cushion} />
        <mesh
          geometry={nodes['Mid-'].geometry}
          material={materials['Black-2']}
        />
        <mesh
          geometry={nodes.Seprator001.geometry}
          material={nodes.Seprator001.material}
        />
        <mesh
          geometry={nodes.Seprator.geometry}
          material={materials.Connector}
        />
        <mesh
          geometry={nodes.Cylinder025.geometry}
          material={nodes.Cylinder025.material}
        />
        <mesh
          geometry={nodes.Cylinder025_1.geometry}
          material={materials.GlowBlue}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/headphones.gltf')

export { ModelHeadphones }
