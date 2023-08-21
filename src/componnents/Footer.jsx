import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
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
          <span>elissiouihoussam</span>
          
        </div>
        <p className="description">
          
        </p>

        <ul className="social-links">
        <a href="https://web.facebook.com/elissioui" target={"_blank"}><li><BsFacebook /></li></a> 
        <a href="https://www.instagram.com/elissiouihoussam/" target={"_blank"}> <li><BsInstagram /></li> </a>
        <a href="https://twitter.com/HIssioui" target={"_blank"}> <li><BsTwitter /></li> </a>
        <a href="https://www.linkedin.com/in/houssam-el-issioui-646104236/" target={"_blank"}> <li><BsLinkedin /></li> </a>
        </ul>
        <div className="description">
          <p>&copy; 2023 All Rights Reserved</p>
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;