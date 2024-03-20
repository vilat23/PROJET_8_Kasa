import { useParams } from "react-router-dom";
import data from '../../data/data.json';
import Collapse from '../collapse/Collapse.jsx';

function Details() {
    // Avec useParams on recupere l'id dans l'url de la route definie pour le composant Details.jsx
    const { id } = useParams();
    const currentCard = data.find((card) => card.id === id);

    return (
        <div className="details">
            <div className="carousel">
                <img src="../../src/assets/images/ImgCarrousel.jpg" alt="" />

            </div>

            <div className="apartment__infos">
                <div className="apartment__title__infos">
                    <div className="apartment__title">
                        <h1>{currentCard.title}</h1>
                        <h2>{currentCard.location}</h2>
                    </div>
                    <div className="apartment__tags">
                        <p>Tag1</p>
                        <p>Tag2</p>
                        <p>Tag3</p>
                    </div>
                </div>


                <div className="apartment__host">

                    <div className="apartment__host__infos">
                        <h3>{currentCard.host.name}</h3>
                        <div className="apartment__badge"><img src={currentCard.host.picture} alt="" /></div>
                    </div>

                    <div className="apartment__stars">
                        <span>*</span>
                        <span>*</span>
                        <span>*</span>
                        <span>*</span>
                        <span>*</span>
                    </div>
                </div>

            </div>


            <div className="apartment__collapses">
                <div className="apartment__description">
                    <Collapse name='Description' description={currentCard.description} />
                </div>
                <div className="apartment__equipment">
                    <Collapse name='Équipements' data={currentCard.equipments} />
                </div>
            </div>

        </div>
    );
}

export default Details;