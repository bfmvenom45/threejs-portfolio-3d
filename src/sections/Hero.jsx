import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import HackerRoom from '../components/HackerRoom';
import { Suspense, use } from 'react';
import CanvasLoader from '../components/CanvasLoader';
import { Leva, useControls } from 'leva';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants';

const Hero = () => {
    const controls = useControls('HackerRoom', {
        positionX: {
            value: 0,
            min: -10,
            max: 10
        },
        positionY: {
            value: 0,
            min: -10,
            max: 10
        },
        positionZ: {
            value: 0,
            min: -10,
            max: 10
        },
        rotationY: {
            value: 0,
            min: 0,
            max: 360
        },
        scale: {
            value: 0.07,
            min: 0.01,
            max: 0.2
        }
    });
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024});

    const sizes = calculateSizes(isMobile, isTablet, isSmall);
  return (
   <section className='min-h-screen w-full flex flex-col relative'>
    <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
        <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>
            Hi, I am Oleksandr<span className='waving-hand'>👋</span>
        </p>
        <p className='hero_tag text-gray_gradient'>Building Products & Brands</p>
    </div>
        
    <div className='w-full h-full absolute inset-0'>
        <Leva />
        <Canvas className='w-full h-full'>
            <Suspense fallback={<CanvasLoader />}>
                <PerspectiveCamera makeDefault position={[0, 0, 30]}/> 
                
                <HackerRoom 
                    position={[2, -8, 2]} 
                    rotation={[0, -Math.PI, 0]}
                    scale={sizes ? 0.07 : 0.1}
                />
                
                <ambientLight intensity={1} /> 
                <directionalLight position={[10, 10, 10]} intensity={0.5} />
            </Suspense>
        </Canvas>
    </div>
   </section>
  );
}       

export default Hero;