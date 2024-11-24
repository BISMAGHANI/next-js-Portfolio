import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'

const Contact = () => {
  return (
    <div className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
            <h2 className='text-5xl text-purple-900' data-aos="zoom-in-up">Get In Touch</h2>
            <p className='text-gray-600 text-[18px] pt-2' data-aos="zoom-in-up">
                Drop Me a Line, Give Me a Call, Or Send Me a Message By Submitting The Form
            </p>


            <div className='flex gap-3 items-center' data-aos="zoom-in-up">
              <AiOutlineMail size={30} /> hello@abc.com
            </div>
            <div className='flex gap-3 items-center' data-aos="zoom-in-up">
              <BsTelephone size={30} /> +92 (300) 0000000
            </div>
        </div>

    <div className='space-y-8'> 
    <div className='flex flex-col gap-1' data-aos="zoom-in-up">
    <label htmlFor="email">Email</label>
    <input type="text" 
    className='h=[40px] bg-transparent border border-purple-500'
    id="email"
     />
    </div>
    <div className='flex flex-col gap-1' data-aos="zoom-in-up">
    <label htmlFor="name">Name</label>
    <input type="text" 
    className='h=[40px] bg-transparent border border-purple-500'
    id="name"
     />
    </div>
    <div className='flex flex-col gap-1' data-aos="zoom-in-up">
    <label htmlFor="message">Message</label>
    <textarea 
    className=' bg-transparent border border-purple-500'
    id="message"
    rows={8}
    ></textarea >
    </div>

    <button className='bg-purple-950 p-2 px-6 rounded-xl' data-aos="zoom-in-up">Send</button>

    </div>
    </div>
    </div>
  
  )
}

export default Contact





