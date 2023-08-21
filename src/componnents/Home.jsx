import React, {useState, useEffect} from 'react'
import {BiSearch} from 'react-icons/bi'
import HoussamImg from '../assets/Houssam_El_issioui.jpeg'


export default function Home() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Developer", "Manager", " Designer" ];
  const period = 100;


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

  return (
    <div className='home'>
      <div className="container ">
        <div className="title-container">
          <h2>Iam a <span className="txt-rotate" dataPeriod="50" data-rotate='[ "transfer de lessence", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h2>
           <div className="input-container ">
            
            <input type="text" placeholder='Search here...' />
            <div className="icon">
              <BiSearch/>
            </div>
           </div>
           
        </div>
        
        <div className="extra-image">
          <img src={HoussamImg} alt="" className='xs:hidden flex w-[50%]  ss:w-[30%]  object-top rounded-full border-2 border-sky-600' />
        </div>
      </div>
    </div>
  )
}
