import { useParams } from "react-router-dom";
import data from '../../data/data.json';


function Details() {
    // Avec useParams on recupere l'id dans l'url de la route definie pour le composant Details.jsx
    const { id } = useParams();
    const currentCard = data.find((card) => card.id === id);
    return (
        <div className="details">
            <p>Fenetre de details de la card cliquée, avec ID : {id}</p>
            <img src="../../src/assets/images/ImgCarrousel.jpg" alt=""/>
            <p>CAROUSEL A INTEGRER</p>
            <h1>TITRE : {currentCard.title}</h1>
            <div>
                <p>HOTE : {currentCard.host.name}</p>
                <img src={currentCard.host.picture} alt=""/>
            </div>
            <p>LOCALISATION : {currentCard.location}</p>
            <p>DESCRIPTION : {currentCard.description}</p>
            <p>EQUIPEMENTS : {currentCard.equipments}</p>
        </div>
    );
}

export default Details;