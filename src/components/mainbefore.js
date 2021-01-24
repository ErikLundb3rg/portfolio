import React from 'react';
import ReactDOM from 'react-dom';
import Particles from 'react-particles-js';
import particlesConfig from '../config/particlesConfig';
import Typewriter from 'typewriter-effect'; 
import { flash } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import { Animated } from "react-animated-css";

const styles = {
    bounce: {
  
      width: '100vw',
      height: '100vh',
      backgroundColor: 'white',
      position: 'relative', 
      overflow: 'hidden', 
      backgroundColor: "#001a33",
      color: 'white'
    }
  }

function MainBefore() {
  return (
    <div>
      <div style = {styles.bounce}>

        <div style = {{textAlign: 'center', marginTop: "20vh", fontSize: "30px"}}>
          <Typewriter
            options = {{delay: "200"}}
            onInit={(typewriter) => {
              typewriter
                .typeString('Erik Lundberg')
                .callFunction(() => {
                  console.log('String typed out!');
                })
                .start();
            }}
          />
        </div>
        
        
      </div>


      
    </div>
  );
}


// 
export default MainBefore;
