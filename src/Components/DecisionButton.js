import React from 'react';
import '../Styles/DecisionButton.css'

import { decisions } from '../Dictionary';

const DecisionButton = props => {

    return (
        <div>
            <button id='buttonA' className='buttonDecision' onClick={() => props.onClickHandler(props.decisionA)}>{decisions[props.decisionA]}</button>
            <button id='buttonB' className='buttonDecision' onClick={() => props.onClickHandler(props.decisionB)}>{decisions[props.decisionB]}</button>
        </div>
    );
     
};
 
export default DecisionButton;