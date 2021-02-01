import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./components/home"
import "./App.css"
import Radium, {StyleRoot} from 'radium';
import FadeIn from 'react-fade-in';


function App() {
  
  const [show, setShow] = React.useState(false)

  React.useEffect(() => { 

    setTimeout(() => {
      setShow(true)
    }, 4000)
  }, [show])

  return (
    <>
      
      <Home />

    </>
  );
}

//<div style = {{position: "absolute"}}>
//        <MainBefore />  
//      </div>
//      <FadeIn visible = {show}>
//        <MainAfter />
//      </FadeIn>

// 
export default App;
