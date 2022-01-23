import React from 'react';
import '../Styles/Message.css'
import { messages, titles } from '../Dictionary';
import { useSelector } from 'react-redux';
import Buttons from './Buttons';

const Message = props => {
    
    const scene = useSelector((state) => state.history);

    return (

        <div className='message'>
            <div className='textArea'>

                <h1>{titles[scene]}</h1>
                <p>{messages[scene]}</p>

                <Buttons />
                
            </div>
        </div>

    
    );
     
};
 
export default Message;