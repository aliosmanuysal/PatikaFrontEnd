import { useState, useEffect } from 'react';
import Starships from './Starships';
import Search from './Search';
import starWarsLogo from './../assets/star_wars_logo.png';

const Home = ({starships, isLoading}) => {
    const [counter, setCounter] = useState(1);
    const [starshipsShown, setStarshipsShown] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false);

    useEffect(() => {
        if (!isFiltered) {
            switch (counter) {
                case 1:
                    setStarshipsShown(starships.slice(0, 10));
                    break;
                case 2:
                    setStarshipsShown(starships.slice(0, 20));
                    break;
                case 3:
                    setStarshipsShown(starships.slice(0, 30));
                    break;
                case 4:
                    setStarshipsShown(starships);
                    break;
                default:
                    break;
            }
        }
    }, [starships, counter, isFiltered]);

    const handleCounter = () => {
        if (counter < 4) {
            setCounter(prev => (prev + 1));
        }
    }

    return (
        <div className='home-page'>
            <img className='logo' src={starWarsLogo} alt="logo" />
            <Search starships={starships} setStarshipsShown={setStarshipsShown} setIsFiltered={setIsFiltered} />
            {isLoading ? <h1>Starships Loading...</h1> : <Starships starshipsShown={starshipsShown} />}
            {!isLoading && counter < 4 && !isFiltered && <p onClick={handleCounter} className='show-more'>Show more</p>}
        </div>
    )
}

export default Home