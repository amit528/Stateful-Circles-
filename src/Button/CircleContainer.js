import React, { useState } from 'react'
import "./CircleContainer.css"

function CircleContainer({circles, setCircles}) {
    
    const handleCircles = (id) =>{

        const active = circles.map((elem, index) =>{
            if(index === id ) {
                elem.isActive = !elem.isActive
            }
            return elem;
        })
        setCircles(active)
    }

  return (
    
    <div className='circleContainer'>
        {
            circles.map((elem, index) => {
                return  <div className={elem.isActive?"filledCircle" : "circle" } key={index} onClick={handleCircles.bind(this, index)}></div> 
            })
        }
    </div>
  )
}

export default CircleContainer