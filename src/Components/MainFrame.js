import React, { useState } from 'react';
import '../Styles/MainFrame.css';
import Message from './Message';
import ClipDisplay from './ClipDisplay';

const MainFrame = props => {
    const [mesageState,setMessageState] = useState();
    
    return (
        <div className='Principal'>
            <ClipDisplay src='clips/tiburon.gif' />
            <div className='message'>
                <Message />
            </div>
        </div>
    );
     
};
 
export default MainFrame;