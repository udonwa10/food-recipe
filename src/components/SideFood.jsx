import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import img from '../assets/img/khloe-arledge-ND3edEmzcdQ-unsplash.jpg'
import img2 from '../assets/img/chad-montano--GFCYhoRe48-unsplash.jpg'
import img3 from '../assets/img/fernando-andrade-_P76trHTWDE-unsplash.jpg'
import img4 from '../assets/img/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg'
import img5 from '../assets/img/kobby-mendez-q54Oxq44MZs-unsplash.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../assets/css/SideFood.css'

const SideFood = () => {
  return (
    <>
        <div className="hidden md:block side-image md:h-screen w-full">
          <div className="image-slides w-full">
            <Carousel className=' h-screen -z-1' showStatus={false} width={'100%'} dynamicHeight={true} showThumbs={false} showIndicators={false} autoPlay={true} showArrows={false} infiniteLoop={true} animationHandler={'fade'}>
                <div className="img">
                    <img src={img} alt="" className='h-screen'/>
                    <p>first image</p>
                </div>

                <div className="img">
                    <img src={img2} alt="" className='h-screen'/>
                    <p>first image</p>
                </div>

                <div className="img">
                    <img src={img3} alt="" className='h-screen'/>
                    <p>first image</p>
                </div>

                <div className="img">
                    <img src={img4} alt="" className='h-screen '/>
                    <p>first image</p>
                </div>
                
                <div className="img">
                    <img src={img5} alt="" className='h-screen'/>
                    <p>first image</p>
                </div>
            </Carousel>
          </div>

        </div>
    </>
  )
}

export default SideFood