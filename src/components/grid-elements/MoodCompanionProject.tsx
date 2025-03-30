import Project from '../grid-elements-templates/Project';
import MoodCompanionPicture from '../../assets/projects-pictures/mood-companion.jpg';

import { FaTelegram } from 'react-icons/fa6';
import { AiFillOpenAI } from "react-icons/ai";
import { FaPython } from 'react-icons/fa6';

const MoodCompanionProject = ({ isVertical }: { isVertical: boolean }) => {
  return (
    <Project
      isVertical={isVertical}
      projectName='Mood Companion AI'
      projectLink='https://github.com/MY-NAME-IS-IVAN/mood-companion-chatbot'
      projectPicture={MoodCompanionPicture}
      technologiesIcons={[<FaPython />, <FaTelegram />, <AiFillOpenAI />]}
    />
  );
};

export default MoodCompanionProject;
