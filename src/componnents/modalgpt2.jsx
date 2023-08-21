import React, { useState } from "react";
import Modal from "react-modal";
import { categories } from '../Data';

function Category() {


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
          <h2>Projects</h2>
        </div>
        <div className="categories"  >
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
       
        <div className="modal">
          <div className="modal-content">
            <h3>{tempData[1]}</h3>
            <span className="close-button" onClick={() => setModalIsOpen(false)}>
              &times;
            </span>
            
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



export default Category;





