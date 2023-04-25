import React, { useEffect, useState } from 'react'
import CircleContainer from './CircleContainer'
import "./CircleContainer.css"

function Button() {

    const [count, setCount] = useState({id: 0, isActive : false})
    let [active, setActive] = useState(0);
    const [circles, setCircles] = useState([]);


    useEffect(() =>{
        let count = 0;
        circles.forEach((elem) =>{
            if(elem.isActive){
               count = count + 1;
            }
        })
        setActive(count)
    }, [circles])

    const handleCircle = () =>{
        setCount({...count, id : count.id + 1})
        setCircles([...circles, count])

    }

  return (
    <div className='body'>

        <button onClick={handleCircle}>Create Circle</button>
        <div className="info">
        <h1>Total Circles <span className='circlesLength'>{circles.length}</span> </h1>
        <h1>Active Circles <span className='circlesLength'> {active} </span></h1>

        </div>


        <CircleContainer circles = {circles} setCircles = {setCircles}/>

    </div>
  )
}

export default Button