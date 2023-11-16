import React, { useState, useEffect } from 'react';
import Test from './Test';

const Background = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setI((prevI) => (prevI === 100 ? 0 : prevI + 1));
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const backgroundStyle = {
    background: `linear-gradient(135deg, orange 0%, blue ${i}%, darkorchid 100%)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '360px 570px',
  };

  return (
    <div style={backgroundStyle}>
      {/* Your component content goes here */}
      <Test/>
    </div>
  );
};

export default Background;



// var i=0;

// setInterval(()=>{

//     document.body.style.background="linear-gradient(135deg,orange 0%, blue "+i+"%, darkorchid 100%)";
//     document.body.style.backgroundRepeat="no-repeat";
//     document.body.style.backgroundSize="360px 570px";
    
//      i++;
     
     
//     if(i===100){
        
//         i=0;      
               
//     }
   
    
// },50);