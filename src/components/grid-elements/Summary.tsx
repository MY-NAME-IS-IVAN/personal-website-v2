import RobotPicture from '../../assets/emojis/robot.png';
import { FaArrowsRotate } from "react-icons/fa6";


const Summary = () => {
  return (
    <div className='grid-block summary'>
      <div className='top-container'>
        <img src={RobotPicture} alt='' className='emoji-picture' />
        <button className='default-button'>
          <FaArrowsRotate size={12}/>
          <p>Switch</p>
        </button>
      </div>
      <div className='bottom-container'>
        <p>
          Hi, my name is{' '}
          <strong className='gradient-text-background description-name'>
            Ivan
          </strong>
          . I am a front-end developer skilled in <strong>React</strong>,{' '}
          <strong>TypeScript</strong>, and <strong>API integration</strong>.
          Developed and launched a highly rated{' '}
          <strong>application with 2000+ sales</strong> and{' '}
          <strong>secured a publishing deal for major platforms</strong>.
          Certified in <strong>IBM Full-Stack Software Development</strong> and
          currently pursuing <strong>Meta Front-End Development</strong>{' '}
          certification. These credentials demonstrate my strong foundation in
          modern web technologies and commitment to continuous learning.
        </p>
      </div>
    </div>
  );
};

export default Summary;
