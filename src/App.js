import Navbar from './components/Nav/Navbar';
import './css/App.css';

function App() {

  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/gamingbg.png)`
  };

  return (
    <div className="background-container" style={backgroundStyle}>
      <Navbar />

    </div>
  );
}

export default App;
