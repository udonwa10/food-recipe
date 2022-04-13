import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import img from '../assets/img/khloe-arledge-ND3edEmzcdQ-unsplash.jpg'
import img2 from '../assets/img/chad-montano--GFCYhoRe48-unsplash.jpg'
import img3 from '../assets/img/fernando-andrade-_P76trHTWDE-unsplash.jpg'
import img4 from '../assets/img/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg'
import img5 from '../assets/img/kobby-mendez-q54Oxq44MZs-unsplash.jpg'
import img6 from '../assets/img/jenn-kosar-rzPVSqQjjqs-unsplash.jpg'
import img7 from '../assets/img/food-photographer-jennifer-pallian-8pUjhBm4cLw-unsplash.jpg'
import img8 from '../assets/img/olayinka-babalola-r01ZopTiEV8-unsplash.jpg'
import Masonry from 'react-masonry-css'
import { Link } from 'react-router-dom'
import coco from '../assets/img/background.jpg'



const Foods = ({images, image, label, ingredient}) => {
  const {id} = useParams()
  const [hover, setHover] = useState(false)

  return (
    <div>
      <div className="food">
          <div className="food-card flex justify-center flex-col items-center">
            <div className="food-img">
              <img src={image} alt="image" />
            </div>
            <div className="food-body">
                  <h4 className='text-lg text-center capitalize'>
                    <Link to={`/meal/${label}`}>{label}</Link>                    
                  </h4>
            </div>
          </div>           
      </div>
    </div>
  )
}

export default Foods