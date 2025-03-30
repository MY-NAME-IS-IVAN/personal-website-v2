import SimpleLink from '../grid-elements-templates/SimpleLink';
import { FaLinkedinIn } from 'react-icons/fa6';

const LinkedInLink = () => {
  return (
    <SimpleLink
      link='https://www.linkedin.com/in/i-am-ivan/'
      className='linkedin'
      header='linkedin'
    >
      <FaLinkedinIn />
    </SimpleLink>
  );
};

export default LinkedInLink;
