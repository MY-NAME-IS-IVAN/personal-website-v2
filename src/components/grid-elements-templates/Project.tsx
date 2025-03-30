const Project = ({
  isVertical,
  projectName,
  projectLink,
  projectPicture,
  technologiesIcons,
}: {
  isVertical: boolean;
  projectName: string;
  projectLink: string;
  projectPicture: string;
  technologiesIcons: React.ReactNode[];
}) => {
  return (
    <div
      className={`grid-block project ${isVertical ? 'vertical' : 'horizontal'}`}
    >
      <div className='information-container'>
        <hgroup>
          <p className='subtitle'>PROJECT</p>
          <h2 className='title'>{projectName}</h2>
        </hgroup>
        <hgroup>
          <p className='subtitle'>BUILT WITH</p>
          <ul className='technologies-list'>
            {technologiesIcons.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </hgroup>
        {!isVertical && (
          <a className='default-button' href={projectLink} target='_blank'>
            View Project
          </a>
        )}
      </div>
      <div className='image-container'>
        <img src={projectPicture} alt='' className='project-picture' />
        {isVertical && (
          <div className='button-container'>
            <a className='default-button' href={projectLink} target='_blank'>
              View Project
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
