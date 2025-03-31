import React, { useState, useEffect } from 'react';
import './styles/grid.sass';

import { useThemeEffect } from './hooks/useThemeEffect';
import { useAppSelector } from './store/hooks';
import { Section } from './store/sectionSlice';

import Header from './components/Header';

// Grid elements
import Summary from './components/grid-elements/Summary';
import GoogleMapsLocation from './components/grid-elements/GoogleMapsLocation';
import IBMCertificate from './components/grid-elements/IBMCertificate';
import MetaCertificate from './components/grid-elements/MetaCertificate';
import DrOilProject from './components/grid-elements/DrOilProject';
import DeadCellsProject from './components/grid-elements/DeadCellsProject';
import MusicAnalyzerProject from './components/grid-elements/MusicAnalyzerProject';
import MoodCompanionProject from './components/grid-elements/MoodCompanionProject';
import GitHubLink from './components/grid-elements/GitHubLink';
import InstagramLink from './components/grid-elements/InstagramLink';
import LinkedInLink from './components/grid-elements/LinkedInLink';
import ThemeToggle from './components/grid-elements/ThemeToggle';
import TechnicalSkills from './components/grid-elements/TechnicalSkills';
import MyResumeLink from './components/grid-elements/MyResumeLink';
import ContanctInformation from './components/grid-elements/ContanctInformation';

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 630);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 630);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  useThemeEffect();
  const currentSection = useAppSelector(
    (state) => state.section.currentSection
  );

  const sectionComponents: Record<Section, React.ReactElement[]> = {
    all: [
      <Summary key='summary' />,
      <MyResumeLink key='resume' />,
      <LinkedInLink key='linkedin' />,
      <TechnicalSkills key='skills' />,
      <MusicAnalyzerProject key='music-analyzer' isVertical={isSmallScreen} />,
      <IBMCertificate key='ibm-certificate' />,
      <MetaCertificate key='meta-certificate' />,
      <DeadCellsProject key='dead-cells' isVertical={isSmallScreen} />,
      <DrOilProject key='dr-oil' isVertical={true} />,
      <MoodCompanionProject key='mood-companion' isVertical={true} />,
      <GitHubLink key='github' />,
      <ThemeToggle key='theme-toggle' />,
      <GoogleMapsLocation key='location' />,
      <ContanctInformation key='contact' />,
      <InstagramLink key='instagram' />,
    ],
    about: [
      <Summary key='summary' />,
      <GoogleMapsLocation key='location' />,
      <MyResumeLink key='resume' />,
      <LinkedInLink key='linkedin' />,
      <ContanctInformation key='contact' />,
    ],
    projects: [
      <MusicAnalyzerProject key='music-analyzer' isVertical={true} />,
      <DeadCellsProject key='dead-cells' isVertical={true} />,
      <DrOilProject key='dr-oil' isVertical={true} />,
      <MoodCompanionProject key='mood-companion' isVertical={true} />,
    ],
    media: [
      <GitHubLink key='github' />,
      <LinkedInLink key='linkedin' />,
      <InstagramLink key='instagram' />,
    ],
    skills: [
      <IBMCertificate key='ibm-certificate' />,
      <MetaCertificate key='meta-certificate' />,
      <TechnicalSkills key='skills' />,
    ],
  };

  return (
    <>
      <Header />
      <main className='grid-section'>{sectionComponents[currentSection]}</main>
    </>
  );
}

export default App;
