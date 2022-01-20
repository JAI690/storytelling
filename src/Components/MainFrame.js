import React, { useState } from 'react';
import '../Styles/MainFrame.css';
import Message from './Message';
import ClipDisplay from './ClipDisplay';

const MainFrame = props => {
    const [messageState,setMessageState] = useState(false);
    const changeState = function(){
        setMessageState(!messageState);
    }
    return (
        <div className='Principal' onClick={() => {changeState()}}>
            <ClipDisplay src='clips/perrito.gif' />
            <div className='message' style={messageState ?  {display: ''} : {display: 'none'}}>
                <Message />
            </div>
        </div>
    );
     
};
 
export default MainFrame;