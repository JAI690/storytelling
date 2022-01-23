import React from 'react';
import '../Styles/Message.css'
import StartButton from './StartButton';
import DecisionButton from './DecisionButton';
import { messages, titles } from '../Dictionary';


const Message = props => {

    return (

        <div className='message'>
            <div className='textArea'>

                <h1>{titles[props.state]}</h1>
                <p>
                {messages[props.state]}
                </p>

            {props.state==='start'?
                <StartButton message='START' onClickHandler={props.onClickHandler}/>:
                props.state===''?
                    <DecisionButton decisionA='A' decisionB='B' onClickHandler={props.onClickHandler}/>:
                    props.state.length<3?
                        <DecisionButton decisionA={props.state+'1'} decisionB={props.state+'2'} onClickHandler={props.onClickHandler}/>:
                        <StartButton message='RESTART' onClickHandler={props.reset}/>
            }
            </div>
        </div>

    
    );
     
};
 
export default Message;