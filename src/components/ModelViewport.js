import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import './ModelViewport.css';

export default function ModelViewport({
  modelUrl = null
}) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mountNode = mountRef.current;
    if (!mountNode) {
      return undefined;
    }

    const scene = new THREE.Scene();
    //scene.background = new THREE.Color();

    const camera = new THREE.PerspectiveCamera(
      40,
      mountNode.clientWidth / Math.max(mountNode.clientHeight, 1),
      0.1,
      1000
    );
    camera.position.set(2.8, 2.2, 4.6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mountNode.clientWidth, mountNode.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mountNode.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = true;
    controls.enableZoom = true;
    controls.target.set(0, 0.7, 0);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.7);
    keyLight.position.set(3, 5, 4);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 1.1);
    rimLight.position.set(-4, 2, -3);
    scene.add(rimLight);

    // const floor = new THREE.Mesh(
    //   new THREE.CircleGeometry(4, 64),
    //   new THREE.MeshStandardMaterial({
    //     color: '#1f2937',
    //     roughness: 1,
    //     metalness: 0.05
    //   })
    // );
    // floor.rotation.x = -Math.PI / 2;
    // floor.position.y = -1.15;
    // scene.add(floor);

    const root = new THREE.Group();
    scene.add(root);

    const fallbackMesh = new THREE.Mesh(
        new THREE.BoxGeometry(),
        new THREE.MeshStandardMaterial({
        roughness: 0.35,
        metalness: 0.65
      })
    );
    fallbackMesh.rotation.x = 1.1;
    fallbackMesh.position.y = 0.3;
    root.add(fallbackMesh);

    const loader = new GLTFLoader();
    if (modelUrl) {
      loader.load(
        modelUrl,
        (gltf) => {
          const model = gltf.scene;
          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());
          const maxDimension = Math.max(size.x, size.y, size.z, 0.001);

          model.position.sub(center);
          model.scale.setScalar(2.8 / maxDimension);
          model.rotation.y = Math.PI / 6;

          root.clear();
          root.add(model);
        },
        undefined,
        () => {
          root.clear();
          root.add(fallbackMesh);
        }
      );
    }

    const resize = () => {
      const width = mountNode.clientWidth;
      const height = mountNode.clientHeight;
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const tick = () => {
      animationFrameId = window.requestAnimationFrame(tick);
      if (root.children.length > 0) {
        root.rotation.y += 0.003;
      }
      controls.update();
      renderer.render(scene, camera);
    };

    let animationFrameId = window.requestAnimationFrame(tick);
    window.addEventListener('resize', resize);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      controls.dispose();
      renderer.dispose();
      mountNode.removeChild(renderer.domElement);
    };
  }, [modelUrl]);

  return (
    <div className="viewport-container">
      <div
        className="model-viewport"
        ref={mountRef}
      />
    </div>
  );
}
