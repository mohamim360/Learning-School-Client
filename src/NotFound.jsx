import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <img src="https://media.licdn.com/dms/image/C5612AQEPYce5KpNLyg/article-cover_image-shrink_720_1280/0/1551659700811?e=2147483647&v=beta&t=O9mBMiF-V12jCRJwaBNDWLKNL8cku2QSoCXtKP3vCHg" alt="404 Not Found" style={{ maxWidth: '100%' }} />
      <br />
      <button onClick={handleBackToHome}>Back to Home</button>
    </div>
  );
}

export default NotFound;
