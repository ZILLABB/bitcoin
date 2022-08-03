import './App.css';
import NavBar from './Components/NavBar';
import FirstSection from './Components/FirstSection';
import { Bar } from './Components/Bar';
import SecondSection from './Components/SecondSection';
import ThirdSection from './Components/ThirdSection';
import FourthSection from './FourthSection';
import Footer from './Components/Footer';






function App() {
  return (
    <div className="App">
      <NavBar />
      <FirstSection />
      <Bar />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Footer/>
    </div>
  );
}

export default App;
