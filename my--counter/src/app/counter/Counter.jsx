'use client';

import { useState } from "react";
import { React } from "react";

export default function Counter(){

  
    
      const [counter, setCounter] = useState(0);

 
    // Function is called everytime increment button is clicked
    const handleClick1 = () => {
        // Counter state is incremented
      const increment=  setCounter(counter + 1);
       return increment

    
    };
 
    // Function is called everytime decrement button is clicked
    const handleClick2 = () => {
        // Counter state is decremented
        const decrement = setCounter(counter - 1);
        return decrement
    };
        const resetButton =() =>{
            setCounter(counter * 0);
            
           
        };
    
    
        return(
    <>
    <button class="bg-indigo-500 w-[100px] h-[50px] rounded-full m-[20px] text-white" onClick={handleClick1}>increment{handleClick1}</button>
    
  
    <button class="bg-indigo-500 w-[100px] h-[50px] rounded-full m-[20px] text-white" onClick={handleClick2}>decrement {handleClick2}</button>
    
   
    <button class="bg-indigo-500 w-[100px] h-[50px] rounded-full m-[20px] text-white" onClick={resetButton}>Reset </button>
   
    
    
    </>
        );
    }
  
    
    