import {useRef} from 'react';
import * as THREE from 'three';
import { PresentationControls  } from "@react-three/drei";
import MacBookModel16 from '../models/Macbook-16';
import MacBookModel14 from '../models/Macbook-14';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';



const ANIMATION_DURATION = 1; 
const OFFSET_DISTANCE = 5;
const fadeMeshes = (group: THREE.Group | null, opacity: number) => {
    if(!group) return;

    group.traverse((child) => {
        if((child as THREE.Mesh).isMesh){
            const mesh = child as THREE.Mesh;
            (mesh.material as THREE.Material).transparent = true;
            gsap.to(mesh.material, { opacity, duration: ANIMATION_DURATION})
        }
    })
}

const moveGroup = (group: THREE.Group | null, x: number) => {
    if(!group) return;

    gsap.to(group.position, { x, duration: ANIMATION_DURATION})
}


export default function ModelSwitcher({scale, isMobile}: {scale: number, isMobile: boolean}) {
    const smallMacBookRef = useRef<THREE.Group | null>(null);
    const largeMacBookRef = useRef<THREE.Group | null>(null);

    const showLargeMacBook = scale === 0.08;
    const mobileOffset = isMobile ? 0.03 : 0;
    const largeScale = 0.08 - mobileOffset;
    const smallScale = 0.06 - mobileOffset;

    useGSAP(() => {
        if(showLargeMacBook){
            moveGroup(smallMacBookRef.current, -OFFSET_DISTANCE);
            moveGroup(largeMacBookRef.current, 0);

            fadeMeshes(smallMacBookRef.current, 0);
            fadeMeshes(largeMacBookRef.current, 1);
        } else{
            moveGroup(smallMacBookRef.current, 0);
            moveGroup(largeMacBookRef.current, OFFSET_DISTANCE);

            fadeMeshes(smallMacBookRef.current, 1);
            fadeMeshes(largeMacBookRef.current, 0);
        }
    }, { dependencies: [showLargeMacBook] })

    const controlsConfig = {
        snap: true, 
        speed: 1, 
        zoom: 1, 
        azimuth: [-Infinity, Infinity] as [number, number],
        config: {mass: 1, tension: 0, friction: 26}
    }
  return (
    <>
        <PresentationControls {...controlsConfig}>
            <group ref={largeMacBookRef}>
                <MacBookModel16 scale={largeScale} />
            </group>
        </PresentationControls>

        <PresentationControls {...controlsConfig}>
            <group ref={smallMacBookRef}>
                <MacBookModel14 scale={smallScale} />
            </group>
        </PresentationControls>
    </>
  )
}
