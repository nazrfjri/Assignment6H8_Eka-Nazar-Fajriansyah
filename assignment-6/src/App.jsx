import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieList from './pages/MovieList';
import MovieDetail from './pages/MovieDetail';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './pages/LoginPage';

export const AuthContext = React.createContext();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        {/* Header */}
        <Header />

        {/* Main Content */}
          <div className="flex-grow">
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/movie/:id"
              element={
                <ProtectedRoute>
                  <MovieDetail />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </AuthContext.Provider>
  );
};

export default App;
