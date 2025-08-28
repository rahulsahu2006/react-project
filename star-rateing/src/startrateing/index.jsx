import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";

function Starrateing({ star }) {
    const [selectedstar, setTotalSelected] = useState(0);
    const [hover, setHover] = useState(0);

    function handleOnclick(index) {
       setTotalSelected(index)
    }

    function handleOnmouseEnter(index) {
        setHover(index)
    }

    function handleMouseLeave(index)
    {
         setHover(0)
    }
    function setClass(index)
    {
        if(index <= hover)
            return 'active'
          else if(!hover && selectedstar >= index)
            return 'active'
        else
            return 'inactive'
    }
    return (
        <div className='wrapper'>
            {
                [...Array(star)].map((_, index) => {
                    index+=1;
                    return <FaStar
                        key={index}
                        class="border"
                        className={setClass(index)}
                        size={40}
                        onClick={() => handleOnclick(index)}
                        onMouseEnter={() => handleOnmouseEnter(index)}
                        onMouseLeave={()=>handleMouseLeave(index)}
                    />
                })
            }
        </div>
    )
}

export default Starrateing