import React from 'react';
import '../Styles/ClipDisplay.css'
import { clips } from '../Dictionary';
import { useSelector } from 'react-redux';

const ClipDisplay = props => {

    const scene = useSelector((state) => state.history);

    
    return (
        <img className='clip' src={'clips/'+clips[scene]+'.gif'} alt="Clip not Found" /> 
    );
     
};
 
export default ClipDisplay;