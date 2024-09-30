import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import fetchData from './services/starshipsDataService';
import Home from './components/Home';
import StarshipDetails from './components/StarshipDetails';
import NotFoundRedirect from './components/NotFoundRedirect';
import './App.css';

function App() {
  const [starships, setStarships] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchData();
        const starShipsWithIds = data.map((item, index) => ({ ...item, id: index + 1 }))
        setStarships(starShipsWithIds);
        setIsLoading(false);
      } catch (error) {
        console.error("Error processing data:", error);
      }
    };
    getData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home starships={starships} isLoading={isLoading} />} />
        <Route path="/starship/:id" element={<StarshipDetails starships={starships} isLoading={isLoading} />} />
        <Route path="/:id" element={<StarshipDetails starships={starships} isLoading={isLoading} />} />
        <Route path="*" element={<NotFoundRedirect />} />
      </Routes>
    </Router>
  )
}

export default App
