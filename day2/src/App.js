import './App.css';
import Navbar from './navbar';
import AboutMe from './pages/aboutMe';
import Projects from './pages/projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <body>
        <AboutMe/>
        <Projects/>
      </body>
    </div>
  );
}

export default App;
