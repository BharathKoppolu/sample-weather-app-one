import React, { useState } from "react";
import AddCitiesModal from "./AddCitiesModal";
import './CitiesPage.css';

const CitiesPage = () => {
        const [addCitiesModal, setAddCitiesModal] = useState(false);
      
        const toggleModal = () => {
          setAddCitiesModal(!addCitiesModal);
        };

    return (
        <div className="cities-page">
            <div className='header'>
                <label>Cities</label>
                <button type="button" onClick={toggleModal} className="button">
                    <input type="image" src="../../assets/plus_icon.png" height="50" width="50" alt="plus icon" />
                </button>
                <AddCitiesModal show={addCitiesModal}/>
            </div>
        </div>
    );
}
export default CitiesPage;