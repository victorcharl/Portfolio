import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const YearsOfExperience = ({years}) => {
  const calculateTotalExperience = () => {
    const currentYear = new Date().getFullYear();
    
    return currentYear - years;
  };

  return (
    <div className="text-center font-bold text-[14px]">
      {calculateTotalExperience()}+ years experience
    </div>
  );
};


const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-24 mt-14">
        {technologies.map((technology) => (
          <div className="w-28 h-28 md:w-40 md:h-40" key={technology.name}>
            <div className='text-center font-bold'>{technology.name}</div>
            <BallCanvas icon={technology.icon} />
            <YearsOfExperience years={technology.years} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
