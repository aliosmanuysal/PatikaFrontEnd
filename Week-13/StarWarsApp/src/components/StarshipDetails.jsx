import { useParams, useNavigate } from "react-router-dom";
import starshipImage from './../assets/starship-image.jpg';

const StarshipDetails = ({ starships, isLoading }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (isLoading) {
    return <h1>Loading...</h1>;
  };

  if (!starships.some(starship => starship.id === Number(id))) {
    setTimeout(() => {
      navigate('/');
    }, 3000)
    return <h1>Starship not found. Redirecting to the homepage....</h1>;
  };

  const selectedStarship = starships.filter(starship => starship.id === Number(id))[0];
  return (
    <div className='starship-details-card'>
      <button className="back-button" onClick={() => navigate('/')}>←</button>
      <div className="inner-frame">
        <h1>{selectedStarship.name}</h1>
        <img src={starshipImage} alt="starship" />
        <p><span>Model:</span> {selectedStarship.model}</p>
        <p><span>Hyperdrive Rating:</span> {selectedStarship.hyperdrive_rating}</p>
        <p><span>Passengers:</span> {selectedStarship.passengers}</p>
        <p><span>Max Atmosphering Speed:</span> {selectedStarship.max_atmosphering_speed}</p>
        <p><span>Manufacturer:</span> {selectedStarship.manufacturer}</p>
        <p><span>Crew:</span> {selectedStarship.crew}</p>
        <p><span>Cargo Capacity:</span> {selectedStarship.cargo_capacity}</p>
      </div>
    </div>
  )
}

export default StarshipDetails