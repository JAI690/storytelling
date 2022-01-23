import store from '../Redux/store';
import * as actions from '../Redux/actions';
import { useSelector } from 'react-redux';

export const restart = function(){
    store.dispatch(actions.reset());
}

export const toggleMessage = function(isLoading){
    
    if(!isLoading){
        store.dispatch(actions.toggleMessage())
    }
};

export const selectHistory = (decision)=>{
    transition();

    setTimeout(() => {
        if(decision==='start'){
            store.dispatch(actions.takeDecision('',false));
            
        }else{
            store.dispatch(actions.takeDecision(decision,false));
        }
    }, 1000);
};

const transition = function(){
    store.dispatch(actions.takeDecision('waiting',true));
}