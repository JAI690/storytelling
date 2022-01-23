import React from 'react';
import '../Styles/ClipDisplay.css'
import store from '../Redux/store';
import { clips } from '../Dictionary';

const ClipDisplay = props => {
    
    return (
        <img className='clip' src={'clips/'+clips[store.getState().history]+'.gif'} alt="Clip not Found" /> 
    );
     
};
 
export default ClipDisplay;