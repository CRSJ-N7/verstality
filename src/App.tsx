import './App.css'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Logos from './components/Logos'
import WhatIDo from './components/WhatIDo';
import SelectedWork from './components/SelectedWork';
import MyClients from './components/MyClients';
import OurTeam from './components/OurTeam';
function App() {

  return (
    <>
      <div className="app">
        <Header />
        <AboutMe />
        <Logos />
        <WhatIDo />
        <SelectedWork />
        <MyClients />
        <OurTeam />
      </div>
    </>
  );
}

export default App
