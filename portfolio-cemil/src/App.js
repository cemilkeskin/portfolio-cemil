import './App.css'; 
import React, {useState, useEffect, useContext, useRef} from "react";
import { useHistory } from "react-router-dom";
import background from './paper.png';
import tori from './tori.svg';
import menu from './menu.svg';
import { withRouter, Redirect } from "react-router";
import mouse from './mouse.svg';
import close from './close.svg'; 
import {TimelineMax, TweenMax} from 'gsap';



function App() {

  const [isClicked, setIsClicked] = useState(false);
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false)
  const toriRef = useRef();

  let history = useHistory();


  const pictureClicked = () => {
    setTimeout(() => {
      setMenuClicked(!menuClicked); 
      console.log(menuClicked);

    }, 10);
  }

  const divScrolled = () => {
    if(isDisplayed){
     
        setScrolled(true);
        
        setTimeout(() => {
          setMenuClicked(false);
          setIsClicked(false); 
          setTimeout(() => {
            setIsClicked(false); 
            history.push('/about') 
          }, 3000);
        }, 2000);
       
        console.log(scrolled);

    }


  }

    
useEffect(() => { 
  loadAnimation(setIsClicked, setIsDisplayed, isClicked, toriRef);
}, [])


// useEffect(() => {
  
//   if (scrolled) {
//     return <Redirect to="/about" />;
//   } 
// }, [scrolled])

 


  return ( 
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
 <div className={scrolled ? "circle active" : "circle"}>

 </div>
     <div className="container" onWheel={divScrolled} > 
     <div className={isDisplayed ? "text active" : "text"}>
       
       <div className={scrolled ? "texts active" : "texts"}>
          <div className="name">Cemil</div>
          <div className="lastName">Keskin</div>
          <div className="description">- web designer based in BE</div>
       </div>

    
    <img id="mouse" src={mouse}></img>  
    <img className="menu" src={menu}  onClick={pictureClicked}></img>  
    
    <div className={menuClicked ? "nav active" : "nav"}>
    <img className="close" src={close}  onClick={pictureClicked}></img>  
  
       <ul>
         <li>Cemil</li> 
         <li><a href="/about">About me</a></li>
         <li>Projects</li>
         <li>Contact</li>
       </ul>
     </div> 
       </div> 
     {/* onClick={pictureClicked} */}
        <img className={isClicked ? "tori active" : "tori"} src={tori} ref={toriRef}></img>
     </div> 
    </div>
  ); 
} 


 
const loadAnimation = (setIsClicked, setIsDisplayed, isClicked, toriRef) => {

    
  // console.log(toriRef.current);
  // let timeline = new TimelineMax({repeat: -1});
  // timeline.to(toriRef.current, 1, {
   
  //   css: { 
  //     scale: "0.9",
  //   }
  // });

  // timeline.to(toriRef.current, 1, {

  //   css: {
  //     scale: "1", 
   
  //   }
  // });
  setTimeout(() => {
    console.log("done");
    setIsClicked(true);
   
    // timeline.pause();
    setTimeout(() => {
      setIsDisplayed(true);
    },1800);
  }, 3000);

 
 
}


export default App;
  