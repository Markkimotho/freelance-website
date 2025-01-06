declare module 'three/examples/jsm/controls/OrbitControls' {
    import * as THREE from 'three';
  
    // Define the OrbitControls class extending THREE.EventDispatcher
    export class OrbitControls extends THREE.EventDispatcher {
      constructor(camera: THREE.Camera, domElement: HTMLElement);
  
      // Properties for controlling the behavior of OrbitControls
      enabled: boolean;
      screenSpacePanning: boolean;
      enableDamping: boolean;
      dampingFactor: number;
      rotateSpeed: number;
      zoomSpeed: number;
      panSpeed: number;
  
      // Methods for controlling the camera and renderer
      update(): void;
      reset(): void;
      dispose(): void;
    }
  }
  