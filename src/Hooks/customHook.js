import store from '../Redux/store';
import * as actions from '../Redux/actions';

function functions(){

    const restart = function(){
        store.dispatch(actions.reset());
    }

    const toggleMessage = function(){
        if(!isLoading){
            store.dispatch(actions.toggleMessage())
        }
    };

    const transition = function(){
        store.dispatch(actions.takeDecision('waiting',true));
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

    return {restart, toggleMessage, selectHistory}
}