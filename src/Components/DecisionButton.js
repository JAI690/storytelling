import React from 'react';
import '../Styles/DecisionButton.css'
import store from '../Redux/store';
import * as actions from '../Redux/actions';
import { decisions } from '../Dictionary';
import { useSelector } from 'react-redux';

const DecisionButton = props => {

    const scene = useSelector((state) => state.history);

    const selectHistory = (decision)=>{
        store.dispatch(actions.takeDecision('waiting',true));
        setTimeout(() => {
            if(decision==='start'){
                store.dispatch(actions.takeDecision('',false));
                
            }else{
                store.dispatch(actions.takeDecision(decision,false));
            }
        }, 1000);
    };



    return (
        <div>
            <button id='buttonA' className='buttonDecision' onClick={() => selectHistory(scene+'1')}>{decisions[scene+'1']}</button>
            <button id='buttonB' className='buttonDecision' onClick={() => selectHistory(scene+'2')}>{decisions[scene+'2']}</button>
        </div>
    );
     
};
 
export default DecisionButton;