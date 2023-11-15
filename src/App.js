import './css/App.css';

function App() {

  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/gamingbg.png)`
  };

  return (
    <div className="background-container" style={backgroundStyle}>
      <div className='lustigalöken'>
        <h1>Welcome to My App</h1>
        <p>hey</p>
      </div>
    </div>
  );
}

export default App;
