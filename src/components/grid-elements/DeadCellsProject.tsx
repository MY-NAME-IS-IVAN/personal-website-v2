import Project from '../grid-elements-templates/Project';
import DrOilPicture from '../../assets/projects-pictures/dead-cells.jpg';

import { IoLogoJavascript } from 'react-icons/io';
import { RiReactjsLine } from 'react-icons/ri';

const DeadCellsProject = ({ isVertical = false }: { isVertical: boolean }) => {
  return (
    <Project
      isVertical={isVertical}
      projectName='Dead Cells Website'
      projectLink='https://github.com/MY-NAME-IS-IVAN/dead-cells-website-clone'
      projectPicture={DrOilPicture}
      technologiesIcons={[<IoLogoJavascript />, <RiReactjsLine />]}
    />
  );
};

export default DeadCellsProject;
