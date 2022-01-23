import React from 'react';
import '../Styles/ClipDisplay.css'

const ClipDisplay = props => {
    
    return (
        <img className='clip' src={props.src} alt="Clip not Found" /> 
    );
     
};
 
export default ClipDisplay;