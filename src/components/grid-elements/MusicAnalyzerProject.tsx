import Project from '../grid-elements-templates/Project';
import MusicAnalyzerPicture from '../../assets/projects-pictures/music-personality-analyzer.jpg';


import { SiTypescript, SiTailwindcss } from 'react-icons/si';
import { AiFillOpenAI } from "react-icons/ai";
import { RiReactjsLine } from "react-icons/ri";

const MusicAnalyzerProject = ({ isVertical }: { isVertical: boolean }) => {
  return (
    <Project
      isVertical={isVertical}
      projectName='Music Personality Analyzer'
      projectLink='https://github.com/MY-NAME-IS-IVAN/music-personality-analyzer'
      projectPicture={MusicAnalyzerPicture}
      technologiesIcons={[
        <SiTypescript />,
        <SiTailwindcss />,
        <RiReactjsLine />,
        <AiFillOpenAI />,
      ]}
    />
  );
};

export default MusicAnalyzerProject;
