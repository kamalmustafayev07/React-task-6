import './card.css'
import PropTypes from 'prop-types';

function Card(props)
{
    if(props.name === null)
    {
        return(
            <>
            </>
        )
    }
    return(
        <>
        <div className="card">
            <p>{props.name}</p>
            <p>{props.surname}</p>
            <p>{props.phone}</p>
            <p>{props.email}</p>
            <p>{props.serh}</p>
        </div>
        </>
    )
}

Card.propType = {
    name: PropTypes.string,
    surname: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    serh: PropTypes.string,
}

export default Card