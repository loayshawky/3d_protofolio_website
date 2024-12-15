import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../style';
import { experiences } from '../constans';
import { sectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

import React from 'react';
import { li } from 'framer-motion/client';

// Corrected ExperienceCard component
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'> 
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px]'>{experience.title}</h3>
        <h4 className='text-secondary text-[18px]'>
          {experience.company_name}</h4>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
  {experience.points.map((point, index) => (
    <li
      key={`experience.points-${index}`}
      className="text-white-100 text-[14px] p-1 tracking-wider"
    >
      {point}
    </li>
  ))}
</ul>
  
      <p>{experience.description}</p>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>What I have done so far</p>
        <h2 className={styles.heroHeadText}>Work Experience</h2>
      </motion.div>
      <div className='mt-20 flex flex-col '>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default sectionWrapper(Experience, 'work');
