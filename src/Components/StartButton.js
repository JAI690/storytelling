import React from 'react';
import '../Styles/StartButton.css'

const StartButton = props => {
    
    return (
        <div>
            <button className='startButton' onClick={() => props.onClick()}>START</button>
        </div>
    );
     
};
 
export default StartButton;