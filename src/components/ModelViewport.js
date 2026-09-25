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
            controls.autoRotate = true;
            controls.target.set(0, 0.7, 0);


    

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.7);
    keyLight.position.set(3, 5, 4);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 1.1);
    rimLight.position.set(-4, 2, -3);
    scene.add(rimLight);


    const root = new THREE.Group();
    scene.add(root);

    const loader = new GLTFLoader();
    if (modelUrl) {
      loader.load(
        modelUrl,
        (gltf) => {
          const model = gltf.scene;

          root.clear();
          root.add(model);
        },
        undefined,
        () => {
          root.clear();
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
