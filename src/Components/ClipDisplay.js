import React, { useState } from 'react';
import '../Styles/MainFrame.css'

const ClipDisplay = props => {
    const [variable,setVariable] = useState();
    
    return (
        <img className='clip' src={props.src}/> 
    );
     
};
 
export default ClipDisplay;