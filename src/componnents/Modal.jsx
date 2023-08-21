import React from 'react';







const Modal = ({ open, onClose }) => {

  

  


 

  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
  
        <div className='modalRight'>
    
          <div className='content'>
            <h5>  <span className=''>عرض خاص</span> لمدة 24 ساعة فقط </h5>
            <h6>يمكنك اقتناء هذا المنتج بأقل ثمن</h6>
            <h6> <span className='blue'>Pompe À Main De Transfert</span></h6>
            <h6> <span className='green'>149 Dhs</span> /&nbsp;<span className='red'><del>199 Dhs</del></span> </h6>

          </div>
          <div className='abcd'><img src={""} alt='/' /></div>
          
          <div className='continent'>
            
            <h6>مثالية لنقل البنزين في حالات الطوارئ 🚨   &#9989;  </h6>
            <br></br>
            <h6>يمكنه نقل جميع السوائل مثل الزيت  وما إلى ذلك &#9989;</h6>
            <br></br>
            <h6>أداة منزلية جيدة لاستخدامات متعددة &#9989;</h6>
            
          </div>
          
          
          
          
          <div className='btnContainer'>
          
            <a href='/thank2'>
          <button className='btnPrimary'>
              <span className='bold'>نعم</span>, اريد الاستفاذة من هدا العرض
            </button>
            </a>
            
            <a  href="/thank" className='btnOutline' >
              <span className='bold'>لا</span>, شكرا
            </a>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Modal;