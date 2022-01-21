import React from 'react';
import '../Styles/Message.css'
import StartButton from './StartButton';
import DecisionButton from './DecisionButton';

const Message = props => {

    return (

        <div className='textArea'>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>

        {props.state==='start'?
            <StartButton onClickHandler={props.onClickHandler}/>:
            <DecisionButton decisionA='A' decisionB='B' onClickHandler={props.onClickHandler}/>}
        </div>
    );
     
};
 
export default Message;