import '../styles/header.sass';

const Header = () => {
  return (
    <header className='main-header'>
      <h1 className='name-title gradient-text-background'>IVAN</h1>
      <nav className='segmented-control-navigation'>
        <ul className='segmented-control-list'>
          <li className='active'>All</li>
          <li>About</li>
          <li>Projects</li>
          <li>Media</li>
        </ul>
      </nav>
      <button className='default-button contact-button'>Contact</button>
    </header>
  );
};

export default Header;
