import Hero from '/src/components/hero/Hero.jsx';
import Card from '/src/components/cards/Card.jsx';
import data from '../data/data.json'; 

const Accueil = () => {
    return (
      <div className="homePage">
        <div>
        <Hero />
        </div>
        <div className='cards'>
        <Card data={data} />
        </div>
      </div>
    );
  };
  
  export default Accueil;