import Project from '../grid-elements-templates/Project';
import DrOilPicture from '../../assets/projects-pictures/dr-oil.jpg';

import { PiFileCSharpBold } from 'react-icons/pi';
import { FaUnity } from 'react-icons/fa6';

const DrOilProject = ({ isVertical }: { isVertical: boolean }) => {
  return (
    <Project
      isVertical={isVertical}
      projectName='Dr. Oil'
      projectLink='https://store.playstation.com/en-us/product/UP6537-CUSA32521_00-9855650559742112'
      projectPicture={DrOilPicture}
      technologiesIcons={[<FaUnity />, <PiFileCSharpBold />]}
    />
  );
};

export default DrOilProject;
