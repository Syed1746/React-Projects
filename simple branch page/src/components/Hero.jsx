import React from 'react';
import './Hero.css';
import Shoe from '../assets/shoe_image.png'
import Amazon from '../assets/amazon.png'
import Flipkart from '../assets/flipkart.png'
const Hero = () => {
  return (
    <>
    <div className="container">
          <div className='left'>
      <h1 className='cnt-1'>YOUR FEET DESERVE THE BEST</h1>
      <p>your feet deserve the best and we're here to help   you with our shoes. your feet deserve the best and we're to help you with our shoes</p>
      <div className="btn">
        <button className='active-btn'>Shop Now</button>
        <button className='cate-btn'>Category</button>
      </div>
      <div className='available'>
        <p>Also Available On</p>
        <div className="social-btn">
            <img src={Flipkart} alt="" />
            <img src={Amazon} alt="" />
        </div>
      </div>
    </div>
    <div className="right">/
        <img src={Shoe} alt="" />
    </div>
    </div>
    </>
    
  )
}

export default Hero
