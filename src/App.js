import logo from './logo.svg';
import './App.css';
import Card from './Card';
import logo from './logo.svg';
import sedanIcon from './icons/sedan.svg';
import suvIcon from './icons/suv.svg';
import luxuryIcon from './icons/luxury.svg';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="card-container">
        <Card 
          bgColor="#f0a30a"
          icon={sedanIcon}
          title="SEDANS"
          description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
        />
        <Card 
          bgColor="#0050ef"
          icon={suvIcon}
          title="SUVS"
          description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
        />
        <Card 
          bgColor="#a20025"
          icon={luxuryIcon}
          title="LUXURY"
          description="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
        />
      </div>
    </div>
  );
}

export default App;
