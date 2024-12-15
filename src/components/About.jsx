import Tilt from 'react-parallax-tilt'; // Import the Tilt component
import { motion } from 'framer-motion';
import { styles } from '../style';
import { services } from '../constans';
import { fadeIn, textVariant } from '../utils/motion';
import { sectionWrapper } from '../hoc'; // Ensure you're importing sectionWrapper correctly


const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-[400px]" // Fixed the class here
      options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className=" rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 mb-4 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>Introduction</p>
        <h2 className={styles.heroHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I’m a Software Engineer with over 2 years of experience in front-end development, specializing in building high-performance web
        applications using React.js. Adept at React hooks and backend technologies like Mongoose, I have successfully developed
        websites for several companies, consistently driving improved performance and user satisfaction. I bring a proactive approach to
        project leadership and technical innovation in web infrastructure.
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-evenly gap-10">  
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default sectionWrapper(About, "about"); // Correct the spelling of sectionWrapper
