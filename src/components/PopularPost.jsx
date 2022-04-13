import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/img/khloe-arledge-ND3edEmzcdQ-unsplash.jpg'
import img2 from '../assets/img/chad-montano--GFCYhoRe48-unsplash.jpg'
import img3 from '../assets/img/fernando-andrade-_P76trHTWDE-unsplash.jpg'
import img4 from '../assets/img/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg'
import img5 from '../assets/img/kobby-mendez-q54Oxq44MZs-unsplash.jpg'
import "../assets/css/PopularPost.css"

const PopularPost = () => {
  return (
    <>
        <div className="popular_post mt-5 px-10 py-5">
            <div className="popular_heading text-center   md:flex items-center">
                <p class>Popular post</p>
                <hr className='md:block hidden  ml-20'/>
            </div>
            <div className="popular grid grid-cols-2 gap-10 md:flex mt-10">
                <div className="posts">
                    <img src={img} alt="" className='rounded-full ' />
                    <p>khloe</p>
                </div>

                <div className="posts">
                    <img src={img2} alt="" className='rounded-full ' />
                    <p>chad</p>
                </div>

                <div className="posts">
                    <img src={img3} alt="" className='rounded-full ' />
                    <p>fernando</p>
                </div>

                <div className="posts">
                    <img src={img4} alt="" className='rounded-full'/>
                    <p>kobby</p>
                </div>
                
                <div className="posts rounded-full unique">
                    <Link className='font-bold' to={'/meal'}>  View more</Link>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default PopularPost