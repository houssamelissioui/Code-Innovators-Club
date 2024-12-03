import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs";
import portfolio from "../assets/najd.png"
function Footer() {
  
  const socialLinks = [
    
    
    <BsFacebook />,
    <BsInstagram />,
    <BsTwitter />,
    <BsLinkedin />,
  ];
  return (
    <footer className="py-3 mx-2">
      <div className="brand-container">
        <div className="brand">
           
          
        </div>
        <p className="description">
          
        </p>

        
        <div className="description">

<p>&copy; 2024 Tous droits réservés</p>
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;