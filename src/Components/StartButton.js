import React from 'react';
import '../Styles/StartButton.css'

const StartButton = props => {
    
    return (
        <div>
            <button className='startButton' onClick={() => props.onClickHandler('start')}>START</button>
        </div>
    );
     
};
 
export default StartButton;