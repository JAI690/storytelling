import React, { useState } from 'react';
import '../Styles/MainFrame.css';
import Message from './Message';
import ClipDisplay from './ClipDisplay';

const MainFrame = props => {
    const [messageState,setMessageState] = useState(false);
    const [clip,setClip] = useState('perrito');
    const [history, setHistory] = useState('start')

    const changeState = function(){
        setMessageState(!messageState);
    };

    const transition = function(){
        setClip('waiting');
    }

    const selectHistory = function(decision){
        transition();
        setInterval(() => {
            setHistory(decision);
            changeClip();
        }, 1800);

    };

    const changeClip = function(){
        switch (history) {
            case 'start':
                setClip('tiburon');
                break
            case 'A':
                setClip('jogging');
                break
            default:
                break;
        }
    };

    return (
        <div className='Principal' onClick={() => {changeState()}} >
            <ClipDisplay src= {'clips/'+clip+'.gif'}  />
            <div className='message' style={messageState ?  {display: ''} : {display: 'none'}}>
                <Message onClick={()=>{selectHistory()}}/>
            </div>
        </div>
    );
     
};
 
export default MainFrame;