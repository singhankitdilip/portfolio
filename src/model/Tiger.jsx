
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import tigerScene from "../assets/3d/tiger.glb"

const Tiger = ({currentAnimation, ...props}) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(tigerScene);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    Object.values(actions).forEach((action) => action.stop());

    if (actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);
  return (
    <group ref={group} {...props} dispose={null}>
    <group name="Sketchfab_Scene">
      
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="84b441300bfb4f67b3dfd1de30c13123abccleanermaterialmergergles">
            <group name="Object_2" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Object_3">
                
                <group name="Object_8">
                  <group name="MorphMainGroup">
                    <mesh
                      name="rt_flap_geoShape"
                      castShadow
                      receiveShadow
                      geometry={nodes.rt_flap_geoShape.geometry}
                      material={materials.rt_flap_geoShape}
                      morphTargetDictionary={
                        nodes.rt_flap_geoShape.morphTargetDictionary
                      }
                      morphTargetInfluences={
                        nodes.rt_flap_geoShape.morphTargetInfluences
                      }
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
        
      </group>
    
    </group>
  );
}

useGLTF.preload(tigerScene);
export default Tiger