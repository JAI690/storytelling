import React from 'react';
import StartButton from './StartButton';
import DecisionButton from './DecisionButton';
import { useSelector } from 'react-redux';


const Buttons = props => {

    const scene = useSelector((state) => state.history);
    
    return (
        <div>
        {
            scene.length<3?
                <DecisionButton />:
                <StartButton />
        }
        </div>
    );
     
};
 
export default Buttons;