import SimpleLink from '../grid-elements-templates/SimpleLink';
import { FaGithub } from 'react-icons/fa6';

const GitHubLink = () => {
  return (
    <SimpleLink link='https://github.com/MY-NAME-IS-IVAN' className='github' header='github'>
      <FaGithub />
    </SimpleLink>
  );
};

export default GitHubLink;
