import React , {useState, useEffect} from 'react'
import Footer from './componnents/Footer';
import Contacts from './componnents/Contacts';
import NavBar from './componnents/NavBar';
import Services from './componnents/Services';
import Homes from './componnents/Homes'

import scrollreveal from "scrollreveal";




import "./scss/index.scss";
import Questionnaire from './componnents/Questionnaire';


export default function App() {

const[theme, setTheme] = useState("light");
const changeTheme =() => {
  theme ==='light' ?setTheme("dark") : setTheme("light")
};

 useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 1000,
        reset: false,
      });
      sr.reveal(
        `
        
        .home,
        .services-container,
        .categories-container,
        .recommend-container,
        .choose-us-container,
        .products-container,
        .promo-container,
        footer
    `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);
  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].style.transform = "none";
  }, 1500);

  return (
    
  <div className='app' data-theme={theme}>
      
      <NavBar changeTheme={changeTheme} currentTheme={theme}/>  
      <Homes/>
      <Services/>
      <Contacts/>
      <Footer/>
      

      </div>
  )
}

