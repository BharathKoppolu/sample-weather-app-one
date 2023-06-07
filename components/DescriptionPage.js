import React from 'react';
import './DescriptionPage.css';

const DescriptionPage = () => {
    return (
        <div className="description-page">
            <div className="header">
                <label>Description</label>
                <button type="button" className="button">
                    <input type="image" src="../../assets/favourites_icon.jpg" height="50" width="50" alt="favourites icon"/>
                </button>            
            </div>
        </div>
    );
}
export default DescriptionPage;