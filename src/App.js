import React, { useState } from 'react';
import './App.css';
import logo from './components/assets/KUVO_Logo-1.png';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Media from './components/Media';
import ContactUs from './components/ContactUs';

const components = {
  Home: <Home />,
  About: <About />,
  Projects: <Projects />,
  Media: <Media />,
  Contact: <ContactUs />,
};

function App() {
  const [active, setActive] = useState('Home');

  return (
    <div className="App">
      <nav className="site-nav">
        <div className="nav-left">
          <img src={logo} alt="Kuvo" className="nav-logo" />
        </div>

        <div className="nav-right">
          {Object.keys(components).map((key) => (
            <button
              key={key}
              className={"nav-button" + (active === key ? ' active' : '')}
              onClick={() => setActive(key)}
            >
              {key}
            </button>
          ))}
        </div>
      </nav>

      <main className="site-main">
        {components[active]}
      </main>
    </div>
  );
}

export default App;
