import React from 'react'
import {skills} from "../../constants"

const About = () => {
  return (
    <section className='max-container  '>
        <h1 className='head-text text-slate-200'>
            Hello, I'm <span className=' blue-gradient_text font-semibold drop-shadow '> Ankit Singh</span> 👋
        </h1>
        <div className='mt-5 flex flex-col gap-3 text-slate-400'>
        <p>
        
I'm a Frontend Web developer, working in web development field for over 2 years. I'm dedicated to developing & optimizing interactive, user-friendly, and feature rich websites and applications. I'm also proficient in troubleshooting complex issues, and implementing new features.
        </p>
      </div>

      <div className='py-10 flex flex-col '>
        <h3 className='subhead-text text-slate-200'>My Skills</h3>
        
        <div className='flex justify-center items-center'>

        <div className='mt-16 flex flex-wrap gap-8'>
          {skills.map((skill) => (
              <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-100 h-100 object-contain'
                  />
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}

export default About