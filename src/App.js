import Home from './components/Pages/Home';
import './css/App.css';


function App() {

  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/nys.png)`
  };

  return (
    <div className="background-container-start" style={backgroundStyle}>
      <Home />
    </div>
  );
}

export default App;
