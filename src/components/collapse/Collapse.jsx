import PropTypes from 'prop-types';
import { useState } from 'react';

function Collapse({ name, description, data }) {
    const [close, setClose] = useState(true)
    
    const handleClick = () => {
        setClose((close) => !close)
    }

    return <div className="collapse">
        <div className="collapse-title">{name}
            <button onClick={handleClick}> {close ? <img src="" alt="fleche haut" className='up' /> : <img src="{down}" alt="fleche bas" className='down' />} </button>
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

