const ContanctInformation = () => {
  return (
    <div className='grid-block contact-information'>
      <h2 className='gradient-text-background'>Contact Information</h2>
      <ul>
        <li>
          <strong>ivan.lordofdonuts@gmail.com</strong>
        </li>
        <li>
          <strong>+1 (458) 261-9274</strong>
        </li>
      </ul>
      <div className='button-container'>
        <a href="mailto:ivan.lordofdonuts@gmail.com" className='default-button contact-button'>Contact</a>
      </div>
    </div>
  );
};

export default ContanctInformation;
