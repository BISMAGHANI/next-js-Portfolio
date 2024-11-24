import React from 'react';
import {AiOutlineMenu} from "react-icons/ai"

const Nevbar = () => {
  return (
    <div className='container pt-8 mb-12'>
        <div className="flex justify-between ">
            <div className="text-xl font-medium text-purple-500">Bisma</div>
            <ul className='gap-10 lg:gap-16 hidden md:flex text-purple-300'>
               <li className='menuLink'>Home</li>
               <li className='menuLink'>Projects</li>
               <li className='menuLink'>Skills</li>
               <li className='menuLink'>Contact</li>              
            </ul>



            <AiOutlineMenu className='md:hidden' size={30}/>
        </div>
    </div>
  )
}

export default Nevbar