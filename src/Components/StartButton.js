import React from 'react';
import { useSelector } from 'react-redux';
import * as Helpers from '../Hooks/customHook';
import '../Styles/StartButton.css';


const StartButton = props => {

    const scene = useSelector((store) => store.history);

    const {restart, selectHistory} = Helpers

    return (
        <div>
            {scene === 'start' ? 
                 <button className='startButton' onClick={() => selectHistory('start')}>START</button> :
                 <button className='startButton' onClick={() => restart()}>RESTART</button>
            }
           
        </div>
    );
     
};
 
export default StartButton;