import React from 'react';
import '../Styles/DecisionButton.css'
import { decisions } from '../Dictionary';
import { useSelector } from 'react-redux';
import * as Helpers from '../Hooks/customHook';

const DecisionButton = props => {

    const scene = useSelector((state) => state.history);

    const {selectHistory} = Helpers;


    return (
        <div>
            <button id='buttonA' className='buttonDecision' onClick={() => selectHistory(scene+'1')}>{decisions[scene+'1']}</button>
            <button id='buttonB' className='buttonDecision' onClick={() => selectHistory(scene+'2')}>{decisions[scene+'2']}</button>
        </div>
    );
     
};
 
export default DecisionButton;