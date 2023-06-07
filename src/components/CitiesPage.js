import React, { useState } from "react";
import AddCitiesModal from "./AddCitiesModal";
import './CitiesPage.css';

const CitiesPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModalHandler = () => {
        setIsModalOpen(true);
    };


    // const onSaveHandler = () => {
    //     console.log('savingcity..');
    //     closeModalHandler();
    // };


    return (
        <div className="cities-page">
            <div className='header'>
                <label>Cities</label>
                <button type="button" onClick={openModalHandler} className="button">
                    <input type="image" src="../../assets/plus_icon.png" height="50" width="50" alt="plus icon" />
                </button>
                {isModalOpen && <AddCitiesModal toggleModal={setIsModalOpen}/>}
            </div>
        </div>
    );
}
export default CitiesPage;