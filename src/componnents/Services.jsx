import React from 'react'
import {HiArrowSmRight} from 'react-icons/hi';
import cv from '../assets/houssamElissioui.pdf';





export default function Services() {
  return (
    <div className='services-container mx-3 py-3'>
      <div className="container">
        <div className="service one">
          <p>Experiences</p>
          <h4>Awesome Services</h4>
          <button>Learn More</button>
          <div className='image'>
            <img src="" alt="" />
          </div>
        </div>
        <div className="service two">
          <div className="content">
            <h4>Disc up to 25%</h4>
            <p>
              Learn More <HiArrowSmRight/>
            </p>
          </div>
          <div className='image'>
            <img src="" alt="" />
          </div>
        </div>
        <div className="service three">
          <div className="content">
            <h4>Disc up to 25%</h4>
            <p>
              Learn More <HiArrowSmRight/>
            </p>
          </div>
          <div className='image'>
            <img src="" alt="" />
          </div>

        </div>
        <div className="service four">
          <p>Hire Me</p>
          <h4>Download CV</h4>
          <a href={""} target={'_blank'} rel="Houssam El issioui"><p>
              Click here <HiArrowSmRight/>
            </p>
            </a>
            <div className="image">
              <img src="" alt="" />
            </div>
        </div>
      </div>
      </div>
      
  )
}
