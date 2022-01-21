import React, { useState } from 'react';
import '../Styles/StartButton.css'

const StartButton = props => {
    const [variable,setVariable] = useState();
    
    return (
        <div>
            <button className='startButton' >START</button>
        </div>
    );
     
};
 
export default StartButton;