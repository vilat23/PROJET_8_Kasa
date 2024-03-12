import propTypes from "prop-types";

const Card = ({ data }) => {
    return (
        data.map((card) => (
            <div className="cards-thumbs" key={card.id}>
                <img src={card.cover} alt={card.title} />
                <h3>{card.title}</h3>
            </div>
        ))

    );
};

Card.propTypes = {
    data: propTypes.array.isRequired
}  

export default Card;