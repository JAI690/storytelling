import React, { useState } from 'react';
import '../Styles/MainFrame.css';
import Message from './Message';


const MainFrame = props => {
    const [variable,setVariable] = useState();
    
    return (
        <div className='Principal'>
            <img className='clip' src='clips/perrito.gif'/>

        </div>
    );
     
};
 
export default MainFrame;