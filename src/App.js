import Home from './components/Pages/Home';

import './css/App.css';

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
