import React, { useState } from 'react';
import '../Styles/ClipDisplay.css'

const ClipDisplay = props => {
    const [variable,setVariable] = useState();
    
    return (
        <img className='clip' src={props.src}/> 
    );
     
};
 
export default ClipDisplay;