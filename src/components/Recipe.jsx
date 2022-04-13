import React from 'react'
import coco from '../assets/img/background.jpg'
import '../assets/css/Recipe.css'
import { useParams } from 'react-router-dom'

const Recipe = ({hello}) => {
  const {label}  = useParams()

  return (
    <>
      { 
        hello.filter((hello)=>hello.recipe.label === label).map((hello,index)=>{
            return       (
    <div className="recipe h-screen flex justify-center items-center ">
        <div className="bg-img">
          <img src={hello.recipe.image} className='h-screen w-full' alt="" />
        </div>
        <div className="ingredient-space h-full w-full flex justify-center items-center p-5">
        <div className="ingredient_recipes ">
          <div className="recipes_name">
            <h1 className='text-5xl text-center'>{hello.recipe.label}</h1>
          </div>

          <div className="ingredients ">
            <div className="ingredients-heading text-2xl">
                <h1>Ingredients</h1>
            </div>
            <ul>
                {
                    hello.recipe.ingredients.map((hello)=>{
                        return <li>{hello.text}</li>
                    })
                }
            </ul>
          </div> 
        </div>
        </div>
      
      </div> )
        })  
      }    
   
    </>
  )
}

export default Recipe