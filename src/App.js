import './App.css';
import Card from '../src/Component/Card';
import sedanIcon from '../src/images/icon-sedans.svg';
import suvIcon from '../src/images/icon-suvs.svg';
import luxuryIcon from '../src/images/icon-luxury.svg';
function App() {
  return (
    <div className="App">
        <div className="card-container">
        <Card 
          bgColor="#e28424"
          icon={sedanIcon}
          title="SEDANS"
          description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
        />
        <Card 
          bgColor="#016972"
          icon={suvIcon}
          title="SUVS"
          description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
        />
        <Card 
          bgColor="#01413f"
          icon={luxuryIcon}
          title="LUXURY"
          description="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
        />
      </div>
    </div>
  );
}

export default App;
