import React from 'react';
import { Html, useProgress } from '@react-three/drei';
const CanvasLoader = () => {

    const { progress } = useProgress();
  return (

      <Html 
        as='div'
        center
        style={{ 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
         }}
      >
        <span className='canvas-loader'/>
        <p style={{ fontSize: 14, 
                    color: "#F1F1F1",
                    fontWeight: 800,
                    marginTop: 40
        }}
        > {progress !== 0 ? `Loading... ${progress.toFixed(2)}%` : 'Loading...'}
         </p>
        Loading...</Html>

  );
}

export default CanvasLoader;