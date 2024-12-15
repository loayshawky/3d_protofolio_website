import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { sectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constans';
import { github } from '../assets';




const TestimonialsCard = ({ index, testimonial, name, designation, company, image }) => {
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
  className="violet-gradient p-5 rounded-2xl sm:w-[360px] w-full flex flex-wrap"
>
  <div className="relative w-full h-[200px]">
    {/* Testimonial Text */}
    <div className="mt-5">
      <p className="text-secondary text-[14px]">{testimonial}</p>

      {/* User Details */}
      <div className="mt-8 flex flex-col sm:flex-row sm:justify-between items-center gap-4">
        <div>
          <h3 className="text-white font-bold text-[15px] sm:text-[24px]">{name}</h3>
          <p className="text-secondary text-[15px] sm:text-[10px]">
           <span>@</span> {designation} at {company}
          </p>
        </div>

        {/* Profile Image */}
        <img
          src={image}
          alt={`${name}'s profile`}
          className="rounded-full w-12 h-12 sm:w-10 sm:h-10"
        />
      </div>
    </div>
  </div>
</Tilt>


    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>Testimonials</p>
        <h2 className={styles.heroHeadText}>What People Say</h2>
      </motion.div>
      <div className="w-full flex mt-5">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary text-[15px] max-w-3xl leading-[30px]"
        >
          Here's what people have to say about working with me.
        </motion.p>
      </div>
      <div className="mt-30 flex flex-col md:flex-row md:justify-between items-center gap-4 p-4">
        {testimonials.map((item, index) => (
          <TestimonialsCard key={index} index={index} {...item} />
        ))}
      </div>
    </>
  );
};


export default sectionWrapper(Feedbacks, "feedback");

