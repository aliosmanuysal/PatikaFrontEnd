import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, [navigate]);

  return (
    <div>
      <h1>URL not found. Redirecting to the homepage....</h1>
    </div>
  );
}

export default NotFoundRedirect;
