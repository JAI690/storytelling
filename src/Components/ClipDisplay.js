import React from 'react';
import '../Styles/ClipDisplay.css'
import store from '../Redux/store';
import { clips } from '../Dictionary';

const ClipDisplay = props => {
    let scene = store.getState().history;
    
    store.subscribe(() => {
        scene = store.getState().history
    })
    
    return (
        <img className='clip' src={'clips/'+clips[scene]+'.gif'} alt="Clip not Found" /> 
    );
     
};
 
export default ClipDisplay;