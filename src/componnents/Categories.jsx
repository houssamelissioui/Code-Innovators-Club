import React , {useState}  from "react";
import Modal from "react-modal";
import { categories } from '../Data';
import { motion, AnimatePresence } from "framer-motion"
import "./Questionnaire.css";



function Categories() {
 const [modalIsOpen, setModalIsOpen] = useState(false);
 const [tempData, setTempdata] = useState([]);

  const getData =(image, title, description , video) =>{
    let tempData = [
      title , image , video , description
    ];
    setTempdata(item => [1, ...tempData])
    console.log(tempData);
    return setModalIsOpen(true);




  }
  

 
  

  return (
    <div>
      <div className="categories-container mx-3 py-3" id="projects" >
      <div className="container">
        <div className="title-container">
          <h2>Produits</h2>
        </div>
        <div className="categories d-flex justify-content-center flex-wrap"  >
            {categories.map(({ image, title, description , video }, index) => {
            return (
            <div className="category" key={index} onClick={()=> getData(image,title, video, description)}>
                <img src={image} alt="Category" />
                <h4>{title}</h4>
                <p>{description}</p>
              </div>

            );
             })}
             
             {
              
        modalIsOpen && (
        <div className="modal"  onClick={e => {
            if (e.target === e.currentTarget) {
              setModalIsOpen(false);
            }
          }}>
          <div className="modal-content">
            <span className="close-button" onClick={() => setModalIsOpen(false)}>
              &times;
            </span> 
            <p className=" subtitle">
              {tempData[1]}
            </p>
            <div className="video-container">
              <video controls>
                <source
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            
               
          </div>
        </div>
        )    
      }   
      </div>
       
      </div>
      </div>
    </div>
  );
}

export default Categories;
