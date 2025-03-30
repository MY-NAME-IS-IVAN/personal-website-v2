import SimpleLink from '../grid-elements-templates/SimpleLink';
import { FaInstagram } from 'react-icons/fa6';

const InstagramLink = () => {
  return (
    <SimpleLink
      link='https://www.instagram.com/i_am_ivannnnnn'
      className='instagram'
      header='instagram'
    >
      <FaInstagram />
    </SimpleLink>
  );
};

export default InstagramLink;
