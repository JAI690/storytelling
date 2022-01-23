import React, { useState } from 'react';
import '../Styles/MainFrame.css';
import Message from './Message';
import ClipDisplay from './ClipDisplay';
import { clips } from '../Dictionary';

const MainFrame = props => {
    const [messageState,setMessageState] = useState(false);
    const [history, setHistory] = useState('start')
    const [loading, setLoading] = useState(false);

    const restart = function(){
        setMessageState(false);
        setHistory('start')
    }

    const changeState = function(){
        if(!loading)setMessageState(!messageState);
    };

    const transition = function(){
            setHistory('waiting');
    }

    const selectHistory = async(decision)=>{
        setLoading(true)
        transition();
        setTimeout(() => {
            if(decision==='start'){
                setHistory('')
            }else{
                setHistory(decision);
            }
            setLoading(false);
        }, 1000);
    };


    return (
        <div className='Principal' onClick={() => {changeState()}} >

            <ClipDisplay state={history} src= {'clips/'+clips[history]+'.gif'}  />

            <div style={messageState ?  {display: ''} : {display: 'none'}}>

                <Message state={history} onClickHandler={selectHistory} reset={restart}/>

            </div>
        </div>
    );
     
};
 
export default MainFrame;