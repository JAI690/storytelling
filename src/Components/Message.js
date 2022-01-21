import React from 'react';
import '../Styles/Message.css'
import StartButton from './StartButton';

const Message = props => {

    return (

        <div className='textArea'>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>

        <StartButton onClick={()=>{props.onClick()}}/>
        </div>
    );
     
};
 
export default Message;