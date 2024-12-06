import { Suspense, useMemo } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

export const HomeModel = () => {
  const glb = useLoader(GLTFLoader, "/gang.gltf", (loader) => {
    console.log(loader.manager.onLoad);
  });

  const animation = useMemo(() => {
    const mixer = new THREE.AnimationMixer(glb.scene);
    const clips = glb.animations;
    const action = mixer.clipAction(clips[0]);
    const action1 = mixer.clipAction(clips[7]);
    const action2 = mixer.clipAction(clips[4]);
    // const action3 = mixer.clipAction(clips[4])

    action.setLoop(THREE.LoopOnce, 1);
    action.clampWhenFinished = true;
    action.enabled = true;

    action1.setLoop(THREE.LoopOnce, 1);
    action1.clampWhenFinished = true;
    action1.enabled = true;

    // action3.setLoop(THREE.LoopOnce, 1)
    // action3.clampWhenFinished = true
    // action3.enabled = true

    // action2.setLoop(THREE.LoopOnce, 1)
    // action2.clampWhenFinished = true
    // action2.enabled = true

    action.play();
    action1.play();
    // action3.play()

    mixer.addEventListener("finished", () => action2.play());

    return { mixer, action };
  }, [glb.animations, glb.scene]);

  useFrame((state, delta) => animation.mixer.update(delta));

  return (
    <mesh scale={[-1, 1, 1]} position={[0.1, -1.7, 1.2]} rotation={[0, 0.5, 0]}>
      <primitive object={glb.scene} />;
    </mesh>
  );
};
