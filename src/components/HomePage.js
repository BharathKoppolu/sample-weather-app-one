import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <button type="button" className="tab-button" >
                <div className="tab-box"></div>
                <label>Home</label>
            </button>
                
            <button type="button" className="tab-button">
                <div className="tab-box"></div>
                <label>Cities</label>
            </button>      
        </div>
    );
}
export default HomePage;