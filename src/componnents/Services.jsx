import React from 'react'
import {HiArrowSmRight} from 'react-icons/hi';
import cv from '../assets/houssamElissioui.pdf';





export default function Services() {
  return (
    <div className='services-container mx-3 py-3'>
      <div className="container">
        <div className="service one">
          <p>Accompagnement technologique</p>
          <h4>Rejoignez notre club et faites partie d'une communauté de passionnés d'informatique et d'innovation</h4>
          
          <div className='image'>
            <img src="" alt="" />
          </div>
        </div>
        <div className="service two">
          <div className="content">
            <h4>Hackathons </h4>
            <p>
            ateliers pratiques<HiArrowSmRight/>
            </p>
          </div>
          <div className='image'>
            <img src="" alt="" />
          </div>
        </div>
        <div className="service three">
          <div className="content">
            <h4>Événements tech à la faculté</h4>
             
          </div>
          <div className='image'>
            <img src="" alt="" />
          </div>

        </div>
        <div className="service four">
          <p>Assistance</p>
          <h4>Tech & Innovation</h4>
          <a href={""} target={'_blank'} rel=""><p>
              
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
