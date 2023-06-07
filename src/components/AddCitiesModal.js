import React, { useState } from 'react';
import Card from '../UI/Card.css';
import "./AddCitiesModal.css";


const AddCitiesModal = ({toggleModal}) => {
  // const [cityName, setCityName] = useState('');

  // const handleSave = () => {
  //   onSave(cityName);
  //   setCityName('');
  // };
  const Dummy_cities = ['Hyderabad', 'Vijayawada', 'Delhi', 'bangalore'];
  const Dummy_temperatures = [10, 25, 42, 38];
  return (
    <div className='modal-wrapper'>
      <div className="modal-container">
        <div className="modal-header">
          <p>Add Cities</p>
          <button type="button" onClick={() => toggleModal(false)}>X</button>
        </div>
        <div className="search-bar">
          <input type="text" placeholder='Search Cities...'/>
        </div>
        <div className="cities-list">
          <Card city={}/>
          <li>Vijayawada</li>
          <li>Delhi</li>
          <li>Bangalore</li>
        </div>
      </div>
    </div>

  );
};

export default AddCitiesModal;
