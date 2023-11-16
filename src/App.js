// import Navbar from './components/Nav/Navbar';
// import Pf from './components/small/Pf';
import MovingText from './components/small/MovingText';
import './css/App.css';

function App() {

  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/gamingbg.png)`
  };

  return (
    <div className="background-container" style={backgroundStyle}>
      {/* <Pf />
      <Navbar /> */}
      <MovingText />
    </div>
  );
}

export default App;
