import React from 'react';
import '../Styles/Message.css'
import StartButton from './StartButton';
import DecisionButton from './DecisionButton';

const messages = {
    'A': 'This is state A',
    'B': 'This is state B'
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
            props.state.length<3?
                <DecisionButton decisionA={props.state+'1'} decisionB={props.state+'2'} onClickHandler={props.onClickHandler}/>:
                <div></div>
        }
        </div>
    );
     
};
 
export default Message;