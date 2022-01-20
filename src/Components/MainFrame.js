import React, { useState } from 'react';
import '../Styles/MainFrame.css';
import Message from './Message';
import ClipDisplay from './ClipDisplay';

const MainFrame = props => {
    const [variable,setVariable] = useState();
    
    return (
        <div className='Principal'>
            <ClipDisplay src='clips/perrito.gif' />
            <Message />
        </div>
    );
     
};
 
export default MainFrame;