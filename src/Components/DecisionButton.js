import React from 'react';
import '../Styles/DecisionButton.css'

const decisions = {
    'A': 'This is state A',
    'A1': 'This is state A1',
    'A12': 'This is state A11',
    'A12': 'This is state A12',
    'A2': 'This is state A2',
    'A21': 'This is state A21',
    'A22': 'This is state A22',
    'B': 'This is state B',
    'B1': 'This is state B1',
    'B12': 'This is state B11',
    'B12': 'This is state B12',
    'B2': 'This is state B2',
    'B21': 'This is state B21',
    'B22': 'This is state B22',
}


const DecisionButton = props => {


    return (
        <div>
            <button className='button' onClick={() => props.onClickHandler(props.decisionA)}>{decisions[props.decisionA]}</button>
            <button className='button' onClick={() => props.onClickHandler(props.decisionB)}>{decisions[props.decisionB]}</button>
        </div>
    );
     
};
 
export default DecisionButton;