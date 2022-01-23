import React, { useEffect, useState } from 'react';
import '../Styles/MainFrame.css';
import Message from './Message';
import ClipDisplay from './ClipDisplay';

import store from '../Redux/store';
import * as actions from '../Redux/actions';
import { useSelector } from 'react-redux';

const MainFrame = props => {

    const { isMessageDisplay, isLoading } = useSelector((state) => state);


    const restart = function(){
        store.dispatch(actions.takeDecision('start'));
        //setisLoading(false);
    }

    const toggleMessage = function(){
        if(!isLoading){
            store.dispatch(actions.toggleMessage())
        }
    };

    const transition = function(){
        store.dispatch(actions.takeDecision('waiting',true));
        //store.dispatch(actions.toggleMessage());
    }

    const selectHistory = (decision)=>{
        transition();
        setTimeout(() => {
            if(decision==='start'){
                store.dispatch(actions.takeDecision('',false));
            }else{
                store.dispatch(actions.takeDecision(decision,false));
            }
        }, 1000);
    };


    return (
        <div className='Principal' onClick={() => {toggleMessage()}} >

            <ClipDisplay />

            <div style={isMessageDisplay?  {display: ''} : {display: 'none'}}>

                <Message selectHistory={selectHistory} reset={restart}/>

            </div>
        </div>
    );
     
};
 
export default MainFrame;