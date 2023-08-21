import React from 'react';

import { contacts } from '../Data';
import { socialIcons } from '../Data';
import { motion } from 'framer-motion';
import axios from 'axios';
import swal from 'sweetalert'
import { useState , useEffect } from "react";






const Contact = () => {


 







    function getDateTime() {
    var now     = new Date(); 
    var year    = now.getFullYear();
    var month   = now.getMonth()+1; 
    var day     = now.getDate();
    var hour    = now.getHours();
    var minute  = now.getMinutes();
    var second  = now.getSeconds(); 
    if(month.toString().length == 1) {
         month = '0'+month;
    }
    if(day.toString().length == 1) {
         day = '0'+day;
    }   
    if(hour.toString().length == 1) {
         hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
         minute = '0'+minute;
    }
    if(second.toString().length == 1) {
         second = '0'+second;
    }   
    var dateTime = year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second;   
     return dateTime;
}

// example usage: realtime clock


 const [name , setName] = useState('');
  const [phone , setPhone] = useState('');
  const [lastname , setLastname] = useState('');
  const [email , setEmail] = useState('');
  const [message , setMessage] = useState('');
 
  
  const [openModal, setOpenModal] = useState(false);

  const [orderdate, setOrderDate] = useState(getDateTime());
  const [isAuth, setIsAuth] = useState(true);



  

   

  

  const handleSubmit = async (e, resetForm) => {
    e.preventDefault();
    
   // console.log(name , phone , city , email , message);

   var a = document.getElementById("name");
   var b = document.getElementById("number");
   var c = document.getElementById("lastname");
   var d = document.getElementById("email");
   var h = document.getElementById("adresse");


   
   swal({
  title: "Thank you!",
  text: "Your message has been successfully sent. We will contact you very soon!",
  icon: "success",
  timer: 3500
}).then(
  function(){ 
  window.location.reload("")
  }
)

const data = {
    OrderDate : orderdate,
    Firstname: name,
    Lastname : lastname,
    Phone : phone,
    Email : email,
    Adresse : message,  
    
    

   }
    
   axios.post('', data)
        .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  
       



        a.value = "";
        b.value = "";
        c.value = "";
        d.value = "";
        e.value = "";
        h.value= "";

        

  };


  return (
    <div className="container" id="contact">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}} 
        className="title"
      >
            
            <h2 >Contact Me</h2>
      </motion.div>
      
      <div className="contact_form">
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [-150,0], opacity: 1 }}
          transition={{duration: 1}}
          className='contact_left_container'>
          <h3> Hi</h3>
          <p className='contact_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nihil unde atque voluptates, cumque molestias eveniet voluptatum animi consectetur magni mollitia dolor exercitationem labore maiores!</p>
          {contacts.map(contact => {
            return (
              <div className='contact_left' key={contact.id}>
                <div className="icon">
                  {contact.icon}
                </div>
                <p>{ contact.infoText}</p>
              </div>
            )
          })}
         
        </motion.div>
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [150,0], opacity: 1 }}
          transition={{duration: 1}}
          className="contact_right"
        
        >
          <form id="form" onSubmit={handleSubmit}>
          
          <div className="row">
            <input type="text" id='name' placeholder='First Name' onChange={(e) => setName(e.target.value)} value={name} required/>
            <input type="text" placeholder='Last name' onChange={(e) => setLastname(e.target.value)} value={lastname} required/>
          </div>
          <div className="row">
            <input type="text" id='number' placeholder='Phone 06' pattern="[0-9]{10}"  onChange={(e) => setPhone(e.target.value)} value={phone} required/>
            <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} required />
            
          </div>
          <div className="row">
            <textarea placeholder='message' onChange={(e) => setMessage(e.target.value)} value={message} required></textarea>

            
            
          </div>
          <div  className="hidden" id="digital-clock" onChange={(e) => setOrderDate(e.target.value)} value={orderdate}  />
          
            <motion.div
          
          whileHover={{ scale: 1.1 }}
          transition={{duration: 0.4}}
          variants={""}
          animate="animation">
            <button className='btn' 
       onChange={() => setIsAuth(false)} type="submit">Send</button>
       </motion.div>
       
           </form>
        </motion.div>

        
      </div>
     
    </div>
  )
}

export default Contact