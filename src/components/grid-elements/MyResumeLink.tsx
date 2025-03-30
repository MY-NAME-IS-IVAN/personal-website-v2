import SimpleLink from '../grid-elements-templates/SimpleLink';
import { SiGoogledocs } from 'react-icons/si';

const MyResumeLink = () => {
  return (
    <SimpleLink
      link='https://docs.google.com/document/d/1DrLRTuVWn4FrRUT9_jKqJZubVMgbWi9OujQD0AZjYmQ/edit?usp=sharing'
      className='resume'
      header='my resume'
    >
      <SiGoogledocs />
    </SimpleLink>
  );
};

export default MyResumeLink;
