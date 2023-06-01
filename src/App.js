import './App.css';
import React from 'react';
import HomePage from './components/HomePage';
import CitiesPage from './components/CitiesPage';
import DescriptionPage from './components/DescriptionPage';

function App() {
  return (
    <div className="container">
      <HomePage/>
      <CitiesPage/>
      <DescriptionPage/>
    </div>
  );
}

export default App;