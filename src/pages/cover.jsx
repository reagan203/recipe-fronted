import React from 'react';
import { Link } from 'react-router-dom';
// import backgroundImg from './background.png'; // Import your awesome background image

const CoverPage = () => {
  return (
    <div className="cover-page" style={{ 
      backgroundcolor:'brown',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh', // Ensure full height of the viewport
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    }}>
      <div className="content" style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
        padding: '20px',
        borderRadius: '10px',
      }}>
        <header>
          <h1 style={{ color: '#333' }}>My Recipe App</h1>
        </header>
        <main>
          <p style={{ color: '#333' }}>Welcome to My Recipe App! Explore delicious recipes and get cooking.</p>
          <div className="buttons" style={{ marginTop: '20px' }}>
            <Link to="/signup">
              <button style={{ 
                backgroundColor: '#4CAF50',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginRight: '10px',
              }}>Sign Up</button>
            </Link>
            <Link to="/login">
              <button style={{ 
                backgroundColor: '#008CBA',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}>Login</button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CoverPage;
