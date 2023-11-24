import React from 'react';
import { BrowserRouter, Routes as RoutesDom, Route, Navigate } from 'react-router-dom';
import Home from '../screens/Home/Index';
import Login from '../screens/Login/Index';
import { isAuthenticated } from './auth';
import Solutions from '../screens/Solution';
import Register from '../screens/Register/Index';

const PrivateRoute = ({ element: Element, ...rest }) => {
  if (isAuthenticated()) {
    return <Navigate to="/Home" />;
  }

  return <Element {...rest} />;
};

const Routes = () => (
  <BrowserRouter>
    <RoutesDom>
      <Route path="/" element={<Login />} />
      <Route path="/Home" element={<PrivateRoute element={Home} />} />
      <Route path="/Solutions" element={<PrivateRoute element={Solutions} />} />
      <Route path="/Register" element={<Register />} />
    </RoutesDom>
  </BrowserRouter>
);

export default Routes;