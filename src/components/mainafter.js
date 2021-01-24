import React from 'react';
import ReactDOM from 'react-dom';
import Particles from 'react-particles-js';
import particlesConfig from '../config/particlesConfig';
import Typewriter from 'typewriter-effect'; 
import { flash } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
    bounce: {
      width: '100vw',
      height: '100vh',
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

        <div style = {{position: "absolute"}}>
            <Particles height = "100vh" width = "100vw" params = {particlesConfig} />
        </div>

        <div style = {{marginTop: "10vh"}}>
            <div style = {{height: "100px", width: "100px", borderRadius: "50%", backgroundColor: "white", margin: "10px auto"}}>

            </div>
            <div style = {{textAlign: 'center', fontSize: "30px"}}>
                Erik Lundberg
            </div>

            
        </div>

        

        
        
        
      </div>


      
    </div>
  );
}


// 
export default MainBefore;
