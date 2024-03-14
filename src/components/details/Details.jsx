import { useParams } from "react-router-dom";
import data from '../../data/data.json';


function Details() {
    // Avec useParams on recupere l'id dans l'url de la route definie pour le composant Details.jsx
    const {id} = useParams();
    const currentCard = data.find((card) => card.id === id);
    return (
        <div className="details">
            <p>Je suis une carte de details avec l'id {id}</p>
            <h1>voici le titre de la card cliquée : {currentCard.title}</h1>
            <p>voici la localisation : {currentCard.location}</p>
        </div>
    );
}

export default Details;