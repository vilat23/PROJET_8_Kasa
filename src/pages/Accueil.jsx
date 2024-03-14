import Hero from '/src/components/hero/Hero.jsx';
import Card from '/src/components/cards/Card.jsx';
import data from '../data/data.json'; 

function Accueil() {
    return (
      <div className="homePage">
        <Hero />
        <div className='cards'>
        {/* On ajoute une prop data au composant Card pour l'utiliser dans Card.jsx */}
        <Card data={data} />   
        </div>
      </div>
    )
  }
  
  export default Accueil;