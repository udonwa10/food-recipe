import React from 'react'
import Search from '../components/Search';
import Masonry from 'react-masonry-css';
import Food from '../components/Foods'
import { TailSpin } from 'react-loader-spinner';
import '../assets/css/food.css'
import Navbar from '../components/Navbar';

const Meal = ({hello,getInfo, setSearchInput, searchInput,loading, setLoading}) => {
    
    const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1  
    }
        

  return (
    <>
        <Navbar/>

        <Search getInfo={getInfo} setSearchInput={setSearchInput} searchInput={searchInput} />

            {
                loading?
                <div className="loading flex justify-center items-center">
                    <TailSpin className=''/>
                </div>
                :                    
            <Masonry breakpointCols={breakpointColumnsObj}  className='my-masonry-grid' columnClassName="my-masonry-grid_column">
          
          {
          hello.map((data)=>{
            return <Food hello={data} image={data.recipe.image} label={data.recipe.label}/>
          })
          }
        </Masonry>
}
    </>
  )
}

export default Meal