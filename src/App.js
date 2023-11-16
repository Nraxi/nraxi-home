import { Link } from 'react-router-dom';
import Navbar from './components/Nav/Navbar';
import Home from './components/Pages/Home';
// import Pf from './components/small/Pf';
import './css/App.css';
import AboutMe from './components/Pages/AboutMe';

function App() {

  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/gamingbg.png)`
  };

  return (
    <div className="background-container" style={backgroundStyle}>
      <Home />
    </div>
  );
}

export default App;
