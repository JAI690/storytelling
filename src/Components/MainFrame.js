import React, { useState } from 'react';
import '../Styles/MainFrame.css';
import Message from './Message';
import ClipDisplay from './ClipDisplay';
import { clips } from '../Dictionary';

import store from '../Redux/store';
import * as actions from '../Redux/actions';

const MainFrame = props => {
    const [messageState,setMessageState] = useState(false);
    const [isLoading, setisLoading] = useState(false);

    const restart = function(){
        store.dispatch(actions.takeDecision('start'));
        setisLoading(false)
        setMessageState(false);
    }

    const toggleMessage = function(){
        if(!isLoading)setMessageState(!messageState);
    };

    const transition = function(){
        store.dispatch(actions.takeDecision('waiting'));
        setisLoading(true)
        setMessageState(false);
    }

    const selectHistory = (decision)=>{
        transition();
        setTimeout(() => {
            if(decision==='start'){
                store.dispatch(actions.takeDecision(''));
                
            }else{
                store.dispatch(actions.takeDecision(decision));
            }
            setisLoading(false);
        }, 1000);
    };


    return (
        <div className='Principal' onClick={() => {toggleMessage()}} >

            <ClipDisplay />

            <div style={messageState ?  {display: ''} : {display: 'none'}}>

                <Message onClickHandler={selectHistory} reset={restart}/>

            </div>
        </div>
    );
     
};
 
export default MainFrame;