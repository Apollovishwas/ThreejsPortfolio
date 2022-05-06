import React from 'react';
import ReactDOM from 'react-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import './DesignCards.css'

export default function DesignCards() {
    
    const options = {
        loop: true,
        margin: 0,
        nav: true,
        animateIn: "bounceInRight",
        animateOut: "bounceOutRight",
        dots: false,
        autoplay: true,
        smartSpeed: 700,
   
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 1,
          },
          1000: {
            items: 3,
          },
        },
      };


    return(
        <div className='designCards'>
            <div className='theDesignDiv'>
          <h1 className="designTitle">Desi<br/>gns</h1>
         
          
         
          <OwlCarousel className='theCarousal'{...options}>
              <div className='One'>
                  <img src={'https://i.ibb.co/sy7ZmCk/a966ab2d1da007d72c3ffe8a2c7fdf36.jpg'} alt = 'no interet'/>
              </div>
              <div className='One'>
                  <img src={'https://i.ibb.co/9GyWSym/24c8f2557eeac06e674dc03a0ee76f05.jpg'} alt = 'no interet'/>
              </div>
              <div className='One'>
                  <img src={'https://i.ibb.co/SKGgQ13/85ff46760ff4d56795b88b5a1f0da23a.jpg'} alt = 'no interet'/>
              </div>
              <div className='One'>
                  <img src={'https://i.ibb.co/L5N4bCC/d810904e2ad03a338bf6d0890cf0cd5f.jpg'} alt = 'no interet'/>
              </div>
              <div className='One'>
                  <img src={'https://i.ibb.co/jypT6Pb/e67c7dc267b01c9a248f64865c3436e6.jpg'} alt = 'no interet'/>
              </div>
              <div className='One'>
                  <img src={'https://i.ibb.co/Y2r7wbh/ed087f978922d985afe3bc09d5d38170.jpg'} alt = 'no interet'/>
              </div>
              <div className='One'>
                  <img src={'https://i.ibb.co/bbtXjSx/5a59d2711814c8a853f9a6f1463d59d1.jpg'} alt = 'no interet'/>
              </div>
</OwlCarousel>;
</div>
        </div>
    )
}