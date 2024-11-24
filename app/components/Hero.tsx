/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Nevbar from './Nevbar';



const Hero = () => {
  return (
    <>
    <Nevbar/>

    {/* Hero section component */}
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5  md:flex-row flex-col items-center h-[90vh]">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img
        className="object-cover object-center rounded md:h-[800px]"
        alt="hero"
        src="/banner1.png"
        width={600}
        
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-center md:text-left items-center text-center">
      

       <div className='text-[70px] md:text-[90px] font-bold leading-tight flex justify-center items-center '>
                 <div className='items-center'>
                     <p data-aos="zoom-in-up" className='text-purple-300'>I'm</p>
                     <p data-aos="zoom-in-up" className='text-purple-300'>Bisma</p>
                     <p data-aos="zoom-in-up" className='text-purple-300'>Ghani</p>
                 </div>
             </div>
      
    </div>
  </div>
</section>


    </>
  )
};

  export default Hero