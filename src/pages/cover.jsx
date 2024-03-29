import React from 'react';
import { Link } from 'react-router-dom';
// import backgroundImg from './background.png'; // Import your awesome background image

const CoverPage = () => {
  return (
    // <div className="cover-page" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="content">
        <header>
          <h1>My Recipe App</h1>
        </header>
        <main>
          <p>Welcome to My Recipe App! Explore delicious recipes and get cooking.</p>
          <div className="buttons">
            <Link to="/signup">
              <button>Sign Up</button>
            </Link>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
        </main>
      </div>
    // </div>
  );
}

export default CoverPage;
