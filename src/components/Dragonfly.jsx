import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import dragonfly from "../assets/dragonfly.glb";

function DragonflyModel() {
  const group = useRef();
  const { scene, animations } = useGLTF(dragonfly);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const firstAction = Object.values(actions)[0];
    if (firstAction) firstAction.play();
  }, [actions]);

  return (
    <group ref={group}>
      <primitive
        object={scene}
        scale={0.6}
        rotation={[0.7, -Math.PI / -0.75, 0]}
      />
    </group>
  );
}

export default function Dragonfly() {
  return (
    <div
      className="dragonfly-wrapper"
      style={{
        width: "400px",
        height: "400px",
        position: "absolute",
        top: "-150px",
        right: "-100px",
        pointerEvents: "none",
      }}
    >
      <Canvas camera={{ position: [0, 1, 3], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 4, 2]} intensity={1.2} />
        <DragonflyModel />
      </Canvas>
    </div>
  );
}
