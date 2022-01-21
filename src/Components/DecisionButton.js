import React from 'react';
import '../Styles/DecisionButton.css'

const decisions = {
    'A': 'Work',
    'A1': 'Work remote',
    'A11': 'Start Working',
    'A12': 'Simulate Working',
    'A2': 'Work on-site',
    'A21': 'Sleep at work',
    'A22': 'Ask for UTO',
    'B': 'Day off',
    'B1': 'Excercising',
    'B11': 'Take pills *',
    'B12': 'Go home',
    'B2': 'Eating',
    'B21': 'Am I eating too much?',
    'B22': 'Don\'t care...',
}


const DecisionButton = props => {

    return (
        <div>
            <button id='buttonA' className='buttonDecision' onClick={() => props.onClickHandler(props.decisionA)}>{decisions[props.decisionA]}</button>
            <button id='buttonB' className='buttonDecision' onClick={() => props.onClickHandler(props.decisionB)}>{decisions[props.decisionB]}</button>
        </div>
    );
     
};
 
export default DecisionButton;