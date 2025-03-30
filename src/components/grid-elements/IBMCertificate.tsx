import Certificate from '../grid-elements-templates/Certificate';
import IBMCertificatePicture from '../../assets/certificates/ibm-certificate.jpg';

const IBMCertificate = () => {
  return (
    <Certificate
      name='IBM Ful-Stack
JavaScript Developer'
      date='October, 2024'
      description='"They are prepared to take on the challenges of an entry-level full-stack
developer role"'
      picture={IBMCertificatePicture}
      link='https://coursera.org/share/a3833e75eacd51a2ed5752f973221dc8'
    />
  );
};

export default IBMCertificate;
