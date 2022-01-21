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

    const selectHistory = (decision)=>{
        transition();
        if(decision==='start'){setHistory('')}
        setTimeout(() => {
            changeClip(decision);
        }, 1800);

    };

    const changeClip = function(decision){

        switch (decision) {
            case 'start':
                setClip('tiburon');
                break;
            case 'A':
                setClip('jogging');
                break;
            case 'B':
                setClip('sitting to work');
                break;
            default:
                setClip('perrito')
                break;
        }
    };

    return (
        <div className='Principal' onClick={() => {changeState()}} >
            <ClipDisplay src= {'clips/'+clip+'.gif'}  />
            <div className='message' style={messageState ?  {display: ''} : {display: 'none'}}>
                <Message state={history} onClickHandler={selectHistory}/>
            </div>
        </div>
    );
     
};
 
export default MainFrame;