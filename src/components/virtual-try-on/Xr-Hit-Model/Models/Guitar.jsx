/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const ModelGuitar = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/guitar.gltf')
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Generic_Les_Paul_Mesh.geometry}
        material={nodes.Generic_Les_Paul_Mesh.material}
      />
      <mesh
        geometry={nodes.Generic_Les_Paul_Mesh_1.geometry}
        material={materials['Golden Metal']}
      />
      <mesh
        geometry={nodes.Generic_Les_Paul_Mesh_2.geometry}
        material={materials['Fretboard Wood']}
      />
      <mesh
        geometry={nodes.Generic_Les_Paul_Mesh_3.geometry}
        material={materials.Ivory}
      />
      <mesh
        geometry={nodes.Generic_Les_Paul_Mesh_4.geometry}
        material={materials.Finish}
      />
      <mesh
        geometry={nodes.Generic_Les_Paul_Mesh_5.geometry}
        material={materials['Silver Metal']}
      />
      <mesh
        geometry={nodes.Generic_Les_Paul_Mesh_6.geometry}
        material={nodes.Generic_Les_Paul_Mesh_6.material}
      />
      <mesh
        geometry={nodes.Generic_Les_Paul_Mesh_7.geometry}
        material={materials.Knobs}
      />
      <mesh
        geometry={nodes.Generic_Les_Paul_Mesh_8.geometry}
        material={materials['Pickup Wrap Fabric']}
      />
    </group>
  )
}

useGLTF.preload('/models/guitar.gltf')

export { ModelGuitar }
