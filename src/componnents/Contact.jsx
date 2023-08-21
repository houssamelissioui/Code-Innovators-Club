import { useState , useEffect } from "react";
import { Container, Row, Col, FormLabel } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import whatsappImg from "../assets/whatsapp.png";
import Form from 'react-bootstrap/Form';
import {BrowserRouter as Router , Routes , Route, Link} from 'react-router-dom';


import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { Navigate } from "react-router-dom";
import swal from 'sweetalert'
import { fbq } from "react-facebook-pixel";
import ReactPixel from 'react-facebook-pixel';



import Modal from './Modal';

<script defer src="script.js"></script>


 




function Contact  ()  {
 

 


  const [openModal, setOpenModal] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "189 Dhs فقط  ", "189 Dhs فقط   ",  ];
  const period = 100;
  

  


  


  

  function pixelvalue(value){
    var value = 189;
  }

  function  totalPrice(val=quantity){
    
  let abc = "";
if(val=="1"){

let abc = "189";
}
if(val=="2"){

  let abc = "189";
  
}
return abc;
}


  const handleClick = async(e) => {
    

    
    
    
    
 
    
  }



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



setInterval(function (){
   getDateTime();
  document.getElementById("digital-clock").innerHTML = getDateTime;
}, 1000);
  

  

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])


  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(300);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

   
 
  

  const [name , setName] = useState('');
  const [phone , setPhone] = useState('');
  const [city , setCity] = useState('');
  const [email , setEmail] = useState('');
  const [message , setMessage] = useState('');
  const [quantity , setQuantity] = useState('');
  const [productname, setProductname] = useState('Brosse De Nettoyage De Poussière');
  const [producturl , setProductURL] = useState('https://prixchock.com/products/brosse-de-nettoyage-de-poussiere-longue-retractable-en-microfibre');
  const [productvarient, setProductvarient] = useState('none');

  const [orderdate, setOrderDate] = useState(getDateTime());
  const [isAuth, setIsAuth] = useState(true);





  const form = document.getElementById("form");

   

  

  const handleSubmit = async (e, resetForm) => {
    e.preventDefault();
    
   // console.log(name , phone , city , email , message);

   var a = document.getElementById("name");
   var b = document.getElementById("number");
   var c = document.getElementById("city");
   var d = document.getElementById("quantity");
   var h = document.getElementById("adresse");


   
  



      let messages =[]
   

   if (a.length<3){
    e.preventDefault();
    messages.push('المرجو كتابة الاسم الكامل ')

    return false;
   }
   if (b.value === '' || b.value === null ){
    e.preventDefault();
    messages.push('المرجو كتابة الاسم الكامل ')

    return false;
   }

   if (c.value === '' || c.value === null ){
    e.preventDefault();
    messages.push('المرجو كتابة الاسم الكامل ')

    return false;
   }

   if (d.value === '' || d.value === null ){
    e.preventDefault();
    messages.push('المرجو كتابة الاسم الكامل ')

    return false;
   }

   if (h.value === '' || h.value === null ){
    e.preventDefault();
    messages.push('المرجو كتابة الاسم الكامل ')

    return false;
   }

   
  


  


   
     
   

   swal({
    imageUrl: 'https://unsplash.it/400/200',
    title: "نشكركم على ثقتكم",
    text: " سنتصل بكم خلال مدة أقصاها 24 ساعة لتأكيد طلبكم",
    icon: "success",
    timer: 1,
    
  }).then(function() {
    setOpenModal(true);
});
   

   const data = {
    Firstname: name,
    Phone : phone,
    City : city,
    Email : email,
    Adresse : message,
    Totalquantity : quantity,
    Productname : productname,
    ProductURL : producturl,
    Productvarient : productvarient,
   
     
    OrderDate : orderdate,
    

   }
    
   axios.post('https://sheetdb.io/api/v1/8n8943n2eczmj', data)
        .then(response =>  setCity = ""
        
       );
       



        a.value = "";
        b.value = "";
        c.value = "";
        d.value = "";
        e.value = "";
        
       
        ReactPixel.track('Purchase',{
          value: 189,
          currency: 'MAD',
          
        });
       
        

       
  
        
        

         



        

  };
  
  const min = "";
  const max = 12345678988;


  return (
    
    <div className="gotocontact">
    <section className="contact" id="contact">
      

      <br></br>
      
          <section id="cont">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
          <div className="divcontactform" id="contact">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>المرجوا ملأ الاستمارة لطلب المنتج</h2>
                <p className="commande">سيقوم فريق العمل بالاتصال برقم هاتفكم لتأكيد طلبكم</p>
                <h3><span className="txt-rotate" dataPeriod="50" data-rotate='[ "transfer de lessence", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h3>
                
                <form id="form" onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" id="name"  placeholder="الاسم الكامل"  onChange={(e) => setName(e.target.value)} value={name} required />
                      <label for='name' className="spanis"></label>

                      
                    </Col>
                    
                    <Col size={12} sm={6} className="px-1">
                    
                    
                    <input type="text"   id="number" placeholder=" 06  رقم الهاتف"  pattern="[0-9]{10}"  onChange={(e) => setPhone(e.target.value)} value={phone} />
                    
                    
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" id="city" placeholder="المدينة" onChange={(e) => setCity(e.target.value)} value={city} />
                    

                    
                      
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      

                    <select id="quantity" onChange={(e) => setQuantity(e.target.value)} value={quantity} onClick={(e) => (totalPrice(e.quantity) )}>
                    <option value="">اختر المنتج --</option>
                    <option value="1" >  <span></span>فرشاة تنظيف واحدة ب 189 درهم</option>
                    <option value="2" ><span></span> فرشتان تنظيف ب 329 درهم  </option>
                    
                    </select>

              
                     
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    
                    <input type="text" className="hidden" id="email" onChange={(e) => setProductname(e.target.value)} value={productname}  />
                    <input type="text" className="hidden" id="email" onChange={(e) => setProductURL(e.target.value)} value={producturl}  />
                    <input type="text" className="hidden" id="email" onChange={(e) => setProductvarient(e.target.value)} value={productvarient}  />
                 
                    
                   
                   
                  
            
                     <div  className="hidden" id="digital-clock" onChange={(e) => setOrderDate(e.target.value)} value={orderdate}  />
                     <input type="text" className="hidden"  id="email"  />

              
                    </Col>

                    <Col size={12} className="px-1">
                      <textarea rows="4" id="adresse" placeholder="العنوان" onChange={(e) => setMessage(e.target.value)} value={message}  ></textarea>
                      <div>
                       <button  onClick={() => handleClick()} 
      className='modalButton' onChange={() => setIsAuth(false)} type="submit"><span>ارسال</span></button>
    
      </div>
                      
                   
                       
                    </Col>
                    

                    
                    
                  </Row>
                </form>
                <Modal 
          open={openModal} 
          onClose={() => setOpenModal(false)}  />
              </div>}
            </TrackVisibility></div>

            
            <br></br>
            <br></br>

            
          </Col>
          <Col size={12} md={6}>
          <div className="policy">

<br></br>

  <h2>الأسئلة الشائعة </h2>
  <h1>متى سأتوصل بالمنتج وما طريقة الدفع ؟</h1>
  <p>

الأمر بسيط جدًا بعد أن تطلب المنتج من خلال ملا الاستمارة سيتصل بك أحد موظفي الشركة ليؤكد معك الطلب، وسنرسل لك المنتج في 


غضون 24 الى 48 ساعة 

<span>  الدفع يكون عند الاستلام  </span>

لدينا فريق توصيل محترف يوصل لك المنتج أينما كنت  
خلال مدة 24 الى 48 ساعة

خدمة التوصيل مجانية %100


فأنت لست بحاجة لدفع أية مصاريف إضافية

<br></br>
<br></br>
<h1>  ...خدمة ما بعد البيع </h1>
<span>ضمان لمدة 30 يوم </span>

إمكانية إستبدال المنتج في حالة العطب
أو استبدال أي قطعة بها مشكل
هذا هو وعدنا وضماننا، فإرضاء الزبون هدفنا
<br></br>
<br></br>
<h1> للإستفسار أو للطلب على الواتساب</h1>
<div className="social-icon">
<h4><span>&#10132; &nbsp;<a href="https://api.whatsapp.com/send?text=مرحبا بكم&phone=+212650656015" target="_blank"><img src={whatsappImg}></img></a><span></span></span>+212-650 65 60 15</h4>
<br></br>
<br></br></div>
  <div className="alignbutton">

                    
    

    
    
    



    
                
    


 
</div>







</p>

</div>

            
          </Col>
          

          
        </Row>
      </Container>
      </section>
      
    </section>
   
    </div>
    
  )
  
}
export default Contact;