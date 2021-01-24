import React from 'react';
import ReactDOM from 'react-dom';
import Particles from 'react-particles-js';
import particlesConfig from '../config/particlesConfig';
import Typewriter from 'typewriter-effect'; 
import { flash } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import { Animated } from "react-animated-css";
import FadeIn from 'react-fade-in';
import { AiOutlineArrowDown } from "react-icons/ai"
import "./home.css"
import Page2 from "./page2"
import Erik from "../pics/jagXd.jpg"

const styles = {
  bounce: {
    backgroundColor: 'white',
    position: 'relative', 
    overflow: 'hidden', 
    backgroundColor: "#000d1a",
    color: 'white',
  }
}


function Home() {
  const secondDelay = 900;
  const [show, setShow] = React.useState(true)
  const [fading, setFading] = React.useState(false);
  const [secFade, setSecFade] = React.useState(false);
  const myRef = React.useRef(null)

  const executeScroll = () => {
    console.log("help");
    myRef.current.scrollIntoView()   
  }

  React.useEffect(() => {
    
    setTimeout(() => {
      setFading(true);
      setShow(true)
    }, 4000)
    setTimeout(() => {
      setSecFade(true);
    }, 5500)
  }, [show])

  return (
    <div>
      <div style = {styles.bounce}>
        <div style = {{position: "absolute"}}>
          <Animated
            animationIn="zoomOut"
            animationOut="zoomIn"
            isVisible={!fading}
            style={show ? null : { display: "none" }}
          >
          <Particles height = "200vh" width = "100vw" params = {particlesConfig}/>
          </Animated> 
        </div>

        <div style = {{paddingTop: "10vh", textAlign: 'center', position: "relative", height: "90vh"}}>
            <FadeIn visible = {fading}> 
              <img src = {Erik} style = {{height: "115px", width: "115px", borderRadius: "50%", backgroundColor: "white", margin: "10px auto"}} />
            </FadeIn>
            
            <div style = {{fontSize: "30px"}}>
              <Typewriter
              options = {{delay: "200"}}
              onInit={(typewriter) => {
                typewriter
                  .typeString('Erik Lundberg')
                  .start();
              }}
              />
            </div> 

            <FadeIn visible = {fading}> 
              <p style = {{margin: "4px"}}> 
                <a href = "https://www.linkedin.com/in/erik-lundberg-757a921a8/"> Linkedin </a> |
                <a href = "https://github.com/ErikLundb3rg"> Github </a> 
              </p>
            </FadeIn>
            

            <FadeIn visible = {secFade} >
              <div onClick = {executeScroll} style = {{
                            height: "30px", 
                            width: "30px", 
                            borderRadius: "50%", 
                            border: "2px solid white",
                            margin: "0 auto",
                            marginTop: "40vh",
                            fontSize: "26px",
                            cursor: "pointer"
                            }}>
                <AiOutlineArrowDown />
              </div>
            </FadeIn>
            
        </div>
        

        <div style = {{textAlign: "center", padding: "30px", display: secFade ? "block" : "none"}} ref = {myRef} >
          <FadeIn visible = {secFade} delay = {1200}>
            <h1> Tja! </h1>
            <p style = {{maxWidth: "600px", margin: "0 auto", textAlign: "center"}}> 
              Jag heter Erik och är en reko kille som nu går första året Datateknik på LTH. 
              På fritiden tycker jag bland annat om att programmera! Här på min portfoliohemsida kan du se 
              några av mina projekt. 
            </p>
          </FadeIn>
        </div>
        
        <div style = {{display: secFade ? "block" : "none", position: "relative"}}>
          <FadeIn visible = {secFade} delay = {1200}>
            <Page2 />
          </FadeIn>
        </div>
      </div>
    </div>
  );
}


// 
export default Home;
