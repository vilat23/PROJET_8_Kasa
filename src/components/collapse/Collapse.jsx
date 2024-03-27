import PropTypes from 'prop-types';
import { useState } from 'react';

// Import des images des fleches
import topArrow from '../../assets/images/topArrow.png';
import downArrow from '../../assets/images/downArrow.png';

function Collapse({ name, description, data }) {
    const [close, setClose] = useState(true)
    
    const handleClick = () => {
        setClose((close) => !close)
    }

    const colContent = document.querySelector('.collapse-content');

    return <div className="collapse">

        <div className="collapse__title">{name}
            <button onClick={handleClick}> {close ? <img src={topArrow} alt="fleche haut" className='topArrow' /> : <img src={downArrow} alt="fleche bas" className='downArrow' />} </button>
        </div>

        <div className="collapse-content">
            {data ?
                <ul className="equipments__list">
                    {close ? "" : <>{data.map((equipements) => (<li key={equipements}>{equipements}</li>))}</>}
                </ul>
                : <p>{close ? "" : description}</p>
            }
        </div>
    </div>

}

Collapse.propTypes = {
    data: PropTypes.array,
    name: PropTypes.string,
    description: PropTypes.string,
};


export default Collapse;

