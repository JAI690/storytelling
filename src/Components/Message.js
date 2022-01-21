import React from 'react';
import '../Styles/Message.css'
import StartButton from './StartButton';
import DecisionButton from './DecisionButton';

const messages = {
    'A': 'This is state A',
    'A1': 'This is state A1',
    'A12': 'This is state A11',
    'A12': 'This is state A12',
    'A2': 'This is state A2',
    'A21': 'This is state A21',
    'A22': 'This is state A22',
    'B': 'This is stBte B',
    'B1': 'This is stBte B1',
    'B12': 'This is stBte B11',
    'B12': 'This is stBte B12',
    'B2': 'This is stBte B2',
    'B21': 'This is stBte B21',
    'B22': 'This is stBte B22',
}

const Message = props => {

    return (

        <div className='textArea'>
            
            <h1>{props.state}</h1>
            <p>
            {messages[props.state]}
            </p>

        {props.state==='start'?
            <StartButton onClickHandler={props.onClickHandler}/>:
            props.state===''?
                <DecisionButton decisionA='A' decisionB='B' onClickHandler={props.onClickHandler}/>:
                props.state.length<3?
                    <DecisionButton decisionA={props.state+'1'} decisionB={props.state+'2'} onClickHandler={props.onClickHandler}/>:
                    <div></div>
        }
        </div>
    );
     
};
 
export default Message;