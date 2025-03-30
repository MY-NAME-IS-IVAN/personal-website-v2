const Certificate = ({
  name,
  date,
  description,
  picture,
  link,
}: {
  name: string;
  date: string;
  description: string;
  picture: string;
  link: string;
}) => {
  return (
    <a
      className='grid-block certificate interactive'
      href={link}
      target='_blank'
    >
      <div className='information-container'>
        <hgroup>
          <h2>{name}</h2>
          <small className='subtitle'>{date}</small>
        </hgroup>
        <p>{description}</p>
      </div>
      <img src={picture} alt='' className='certificate-picture' />
    </a>
  );
};

export default Certificate;
