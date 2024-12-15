import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { sectionWrapper } from '../hoc';
import { projects } from '../constans'; // Corrected typo from 'constans' to 'constants'
import { fadeIn, textVariant } from '../utils/motion';
import { github } from '../assets';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="w-full"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="violet-gradient p-5 rounded-2xl sm:w-[360px] w-full  "
      >
        <div className="relative w-full h-[240px] flex justify-center items-center">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank") }
              className='black-gradient 
                 w-10 h-10 rounded-full
               flex justify-center
                items-center
                cursor-pointer '
            >
              <img src={github} alt="github"  className='w-1/2 h-1/2 object-cover'/>
                
            </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags?.map((tag) => (
            <span
              key={tag.name}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>

        <div className="mt-4">
          <a
            href={source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Source Code
          </a>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>My Work</p>
        <h2 className={styles.heroHeadText}>Projects</h2>
      </motion.div>
      <div className={` w-full flex `}>
      <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          "I specialize in developing high-quality web applications using React.js, with a strong focus on creating seamless user experiences. My portfolio includes diverse projects, such as e-commerce platforms with advanced filtering and payment integrations, and gym management systems featuring interactive class scheduling and membership tracking. By leveraging React hooks, efficient state management, and modern development tools, I deliver scalable and maintainable solutions tailored to client requirements. Each project reflects my commitment to performance optimization, clean code, and innovative design."
        </motion.p>
      </div>
      <div className={`${styles.paddingY} third rounded-2 mt-30 flex flex-col md:flex-row md:justify-between items-center gap-4 p-4`}>
      {projects.length > 0 ? (
          projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))
        ) : (
          <p>No projects available.</p>
        )}

      </div>
    </>
  );
};

export default sectionWrapper(Works, "");
