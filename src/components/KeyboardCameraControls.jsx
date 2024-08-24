import React, { useRef, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';

// Custom hook to handle keyboard inputs
function useKeyboardControls() {
  const keys = useRef({});

  useEffect(() => {
    const handleKeyDown = (event) => {
      keys.current[event.key] = true;
    };

    const handleKeyUp = (event) => {
      keys.current[event.key] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return keys;
}

export default function KeyboardCameraControls() {
  const { camera } = useThree(); // Get the camera from the Three.js scene
  const keys = useKeyboardControls(); // Custom hook to track keyboard input

  useFrame(() => {
    // Adjust these values to control speed and sensitivity
    const moveSpeed = 0.1;
    const rotationSpeed = 0.05;

    // Update camera position based on keyboard input
    if (keys.current['w']) camera.position.z -= moveSpeed; // Move forward
    if (keys.current['s']) camera.position.z += moveSpeed; // Move backward
    if (keys.current['a']) camera.position.x -= moveSpeed; // Move left
    if (keys.current['d']) camera.position.x += moveSpeed; // Move right
    if (keys.current['ArrowLeft']) camera.rotation.y += rotationSpeed; // Rotate left
    if (keys.current['ArrowRight']) camera.rotation.y -= rotationSpeed; // Rotate right
    if (keys.current['ArrowUp']) camera.rotation.x += rotationSpeed; // Rotate up
    if (keys.current['ArrowDown']) camera.rotation.x -= rotationSpeed; // Rotate down
  });

  return null; // This component does not render anything itself
}
