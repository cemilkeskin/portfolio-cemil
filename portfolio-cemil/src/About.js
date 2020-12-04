import './About.css'; 
import React, {useState, useEffect, useContext, useRef} from "react";
import { useHistory } from "react-router-dom";
import background from './paper.png';
import tori from './tori.svg';
import menu from './menu.svg';
import { withRouter, Redirect } from "react-router";
import mouse from './mouse.svg';
import close from './close.svg';
import {TimelineMax, TweenMax} from 'gsap';

import img1 from './cemil1.png';
import img2 from './cemil2.png';
import img3 from './cemil3.png';

const About = () => {

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
          
          history.push('/about')
          console.log(scrolled);
  
      }
    }

    useEffect(() => { 
      loadAnimation(setIsDisplayed, toriRef);
    }, [])

    const loadAnimation = (setIsDisplayed) => {

    
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
      
          setIsDisplayed(true);
    
      }, 4000);
    
     
     
    }
  
  
  // useEffect(() => { 
    
  //   if (scrolled) {
  //     return <Redirect to="/about" />;
  //   } 
  // }, [scrolled])
  
   
  
  
    return ( 
      <div className="About">
   
       <div className="container2"> 
      
       
       
       <div className={scrolled ? "about active" : "about"}>
          <div className="name">About</div>
          <div className="lastName">Me</div>
          <div className="descriptioncont">
          <div className="description2">I am a webdesigner from Brussels.</div>
          <div className="description2">I love making aesthetic websites with a little urban taste sprinkled on top.
You can see that on some of my Instagram pictures this 'urban' look is 
always a returning thing. I am very passionate about the work that I do.</div>
          <div className="description2">Furthermore I really am into music, and I want to show the mood and 
essence of my work radiating from my passion.</div>
       </div> 
            </div> 
      
  
      
      <img id="mouseBig" src={mouse}></img>   
      <img className="menuBig" src={menu}  onClick={pictureClicked}></img>  
      
      <div className={menuClicked ? "nav2 active" : "nav2"}>
      <img className="closeBig" src={close}  onClick={pictureClicked}></img>  
    
         <ul>
           <li><a href="/">Cemil</a></li>
           <li>About me</li>
           <li>Projects</li>
           <li>Contact</li>
         </ul>
       </div> 
      
       {/* onClick={pictureClicked} */}
          <img className="toriAbout" src={tori} ref={toriRef}></img>

        <div className={isDisplayed ? "images active" : "images"}>
          <img className="cemilImg" src={img1}></img>
          <img className="cemilImg2" src={img2}></img>
          <img className="cemilImg3" src={img3}></img> 
        </div>
        

       </div> 
      </div>
    ); 
  } 
  
  
export default About;
