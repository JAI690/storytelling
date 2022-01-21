import React from 'react';

const DecisionButton = props => {


    return (
        <div>
            <button onClick={() => props.onClickHandler(props.decisionA)}>{props.decisionA}</button>
            <button onClick={() => props.onClickHandler(props.decisionB)}>{props.decisionB}</button>
        </div>
    );
     
};
 
export default DecisionButton;