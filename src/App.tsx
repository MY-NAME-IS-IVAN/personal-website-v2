import './styles/grid.sass';

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
  return (
    <>
      <Header />
      <main className='grid-section'>
        <Summary />
        <MyResumeLink />
        <LinkedInLink />
        <TechnicalSkills />
        <MusicAnalyzerProject isVertical={false} />
        <IBMCertificate />
        <MetaCertificate />
        <DeadCellsProject isVertical={false} />
        <DrOilProject isVertical={true} />
        <MoodCompanionProject isVertical={true} />
        <GitHubLink />
        <ThemeToggle />
        <GoogleMapsLocation />
        <ContanctInformation />
        <InstagramLink />
      </main>
    </>
  );
}

export default App;
