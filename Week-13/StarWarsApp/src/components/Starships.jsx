import starshipImage from './../assets/starship-image.jpg';
import { useNavigate } from 'react-router-dom';

const Starships = ({ starshipsShown }) => {
    const navigate = useNavigate();
    
    const showDetails = (id) => {
        navigate(`/starship/${id}`);
    }

    return (
        <div className="starships-container">
            {starshipsShown.map(starship => (
                <div key={starship.id} className="starship-card" onClick={() => showDetails(starship.id)}>
                    <img src={starshipImage} alt="starship" />
                    <h3>{starship.name}</h3>
                    <p><span>Model:</span> {starship.model}</p>
                    <p><span>Hyperdrive Rating:</span> {starship.hyperdrive_rating}</p>
                </div>
            ))}
        </div>
    )
}

export default Starships