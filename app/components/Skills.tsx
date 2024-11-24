import React from 'react'

const Skills = () => {
  return (
    <div className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="zoom-in-up">
                <h2 className='text-4xl md-text-5xl'>Technologies I Work With</h2>
                <p className='text-purple-400 pt-2'>
                I Work With Various Front-End Technologies Such As HTML For Structuring Web Pages, CSS For Styling And Design, React.js And Next.js For Building Dynamic Web And Mobile Applications.
                </p>
            </div>

     <div>
        <div className='grid grid-cols-2 text-cyan-800 text-3xl sm:text-4xl'>
          <div className='space-y-2'>
            <h2 data-aos="zoom-in-up">HTML</h2>
            <h2 data-aos="zoom-in-up">React.js</h2>
            <h2 data-aos="zoom-in-up">Next.js</h2>
          </div>

          <div className='space-y-2'>
            <h2 data-aos="zoom-in-up">CSS</h2>
            <h2 data-aos="zoom-in-up">Node.js</h2>
            <h2 data-aos="zoom-in-up">Tailwind</h2>
          </div>
        </div>
     </div>


        </div>
    </div>
  )
}

export default Skills