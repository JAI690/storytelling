import React from 'react';
import '../Styles/Message.css'
import StartButton from './StartButton';
import DecisionButton from './DecisionButton';
import { messages, titles } from '../Dictionary';
import { useSelector } from 'react-redux';

const Message = props => {
    
    const scene = useSelector((state) => state.history);

    return (

        <div className='message'>
            <div className='textArea'>

                <h1>{titles[scene]}</h1>
                <p>
                {messages[scene]}
                </p>

            {
                scene.length<3?
                    <DecisionButton />:
                    <StartButton />
            }
            </div>
        </div>

    
    );
     
};
 
export default Message;