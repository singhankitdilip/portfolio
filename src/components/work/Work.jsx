import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../../constants';


const Work = () => {
  return (
    <section className='max-container  '>
      <div className='py-1'>
        <h3 className='subhead-text'>Projects</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-400'>
        <p>
        Worked on freelance projects and delivered projects to the client as per their
needs. Experienced in working under multiple languages.
        </p>
      </div>

      <div className='mt-12 flex'>
        <VerticalTimeline>
          {experiences.map((experience)=>(
            <VerticalTimelineElement
            key={experience.icon}
            
            date={experience.date}
            icon={
              <div className='flex justify-center items-center w-full h-full'>
                <img src={experience.icon} alt={experience.company_name} className='h-[70%] w-[70%] object-contain' />
              </div>
            }
            iconStyle={{
              background:experience.iconBg
            }}
            contentStyle={{
              borderBottom:"8px",
              borderStyle:"solid",
              borderBottomColor:experience.iconBg,
              boxShadow:"none",
              background:"#1d3d53",
              backdropFilter:"blur(20px)",
                    }}
            >
              <div>
                <h3 className='text-slate-200 text-xl font-poppins font-semibold'>
                  {experience.title}
                </h3>
                <p className='text-black-300 font-medium font-base'style={{margin:0}}>
                  {experience.company_name}
                </p>
              </div>
              <ul className='my-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point,index)=>(
                  <li key={index} className='text-black-400/50 font-normal pl-1 text-sm' >
                    {point}
                  </li>
                ))} 

              </ul>
              <p className='px-5 py-1'> <a className=" text-cyan-300" href={experience.links} target='_blank'>See project !</a></p>
              
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

      </div>
      </div>

    </section>
  )
}

export default Work
