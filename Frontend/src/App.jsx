import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import First from './Components/First';
import Authenticate from './Pages/Authenticate';
import Rooms from './Pages/Rooms';
import Activate from './Pages/Activate';

const isAuth = false;
const user = {
  activated: false,
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>


        <Route path="/" element={
          <GuestRoute>
            <Home />
          </GuestRoute>
        } />

        <Route path="/authenticate" element={
          <GuestRoute>
            <Authenticate />
          </GuestRoute>
        } />

        <Route path="/activate" element={
          <SemiProtectedRoute>
            <Activate />
          </SemiProtectedRoute>
        } />

        <Route path="/rooms" element={
          <ProtectedRoute>
            <Rooms />
          </ProtectedRoute>
        } />


      </Routes>
    </>
  );
}

const GuestRoute = ({ children }) => {
  const location = useLocation();

  return isAuth ? (
    <Navigate to="/rooms" state={{ from: location }} replace />
  ) : (
    children
  );
};


const SemiProtectedRoute = ({ children }) => {
  const location = useLocation();
  return !isAuth ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : isAuth && !user.activated ? (children) : <Navigate to="/rooms" state={{ from: location }} replace />;
}

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  return !isAuth ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : isAuth && !user.activated ? <Navigate to="/activate" state={{ from: location }} replace />
    : (children);
}

export default App;
