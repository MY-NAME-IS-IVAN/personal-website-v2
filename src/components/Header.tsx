import '../styles/header.sass';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setSection, Section } from '../store/sectionSlice';

const sections: Section[] = ['all', 'about', 'projects', 'media', 'skills'];

const Header = () => {
  const dispatch = useAppDispatch();
  const currentSection = useAppSelector((state) => state.section.currentSection);

  return (
    <header className='main-header'>
      <h1 className='name-title gradient-text-background'>IVAN</h1>
      <nav className='segmented-control-navigation'>
        <ul className='segmented-control-list'>
          {sections.map((section) => (
            <li
              key={section}
              className={currentSection === section ? 'active' : ''}
              onClick={() => dispatch(setSection(section))}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </li>
          ))}
        </ul>
      </nav>
      <a href="mailto:ivan.lordofdonuts@gmail.com" className='default-button contact-button'>Contact</a>
    </header>
  );
};

export default Header;
