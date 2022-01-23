import React from 'react';
import '../Styles/Message.css'
import StartButton from './StartButton';
import DecisionButton from './DecisionButton';
import { messages, titles } from '../Dictionary';
import store from '../Redux/store';

const Message = props => {
    
    let scene = store.getState().history;
    
    store.subscribe(() => {
        scene = store.getState().history
    })

    return (

        <div className='message'>
            <div className='textArea'>

                <h1>{titles[scene]}</h1>
                <p>
                {messages[scene]}
                </p>

            {scene==='start'?
                <StartButton message='START' onClickHandler={props.onClickHandler}/>:
                scene===''?
                    <DecisionButton decisionA='A' decisionB='B' onClickHandler={props.onClickHandler}/>:
                    scene.length<3?
                        <DecisionButton decisionA={scene+'1'} decisionB={scene+'2'} onClickHandler={props.onClickHandler}/>:
                        <StartButton message='RESTART' onClickHandler={props.reset}/>
            }
            </div>
        </div>

    
    );
     
};
 
export default Message;