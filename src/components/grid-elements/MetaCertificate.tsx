import Certificate from '../grid-elements-templates/Certificate';
import MetaCertificatePicture from '../../assets/certificates/meta-certificate.jpg';

const MetaCertificate = () => {
  return (
    <Certificate
      name='Meta Front-End Developer'
      date='Expected - May, 2025'
      description="Meta-certified, they've mastered advanced React and UI/UX principles, completing a capstone project that demonstrates their readiness for entry-level front-end roles."
      picture={MetaCertificatePicture}
      link='https://www.coursera.org/professional-certificates/meta-front-end-developer#courses'
    />
  );
};

export default MetaCertificate;
