import './App.css'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Logos from './components/Logos'
import WhatIDo from './components/WhatIDo';
import SelectedWork from './components/SelectedWork';
import MyClients from './components/MyClients';
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
      </div>
    </>
  );
}

export default App
