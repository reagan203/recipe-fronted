import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './pages/header';
import Footer from './pages/footer';
import { useAuth } from './context/AuthContext'; // Assuming you have an AuthContext for managing authentication
import { Login } from './pages/Login';
import Signup from './pages/signup';
import Home from './pages/home';
import CreateRecipe from './pages/create';
import CoverPage from './pages/cover';
// import UpdateRecipe from './pages/update';

function App() {
  const { user } = useAuth(); // Assuming you have access to user authentication state

  return (
    <>
      <Routes>
        {/* Route for CoverPage */}
        <Route path="/cover" element={<CoverPage />} />

        {/* Route for Login and Signup */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Route for Home */}
        <Route path="/home" element={<>
          <Header />
          <Home />
          <Footer />
        </>} />

        {/* Route for CreateRecipe */}
        <Route path="/create" element={<>
          <Header />
          <CreateRecipe />
          <Footer />
        </>} />

        {/* Route for UpdateRecipe */}
        {/* <Route path="/update" element={<>
          <Header />
          <UpdateRecipe />
          <Footer />
        </>} /> */}
      </Routes>
    </>
  );
}

export default App;
