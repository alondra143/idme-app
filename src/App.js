import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes, useRoutes, Navigate } from 'react-router-dom';
import LoginPage from '../src/LoginPage/LoginPage';
import VerifyPage from '../src/VerifyPage/VerifyPage'

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<VerifyPage/>}/>
      <Route path="/home" element={<LoginPage/>}/>
    </Routes>
  );
}

export default App;
