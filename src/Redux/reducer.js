import * as actions from './actionTypes';

export default function reducer(state = {history: 'start'},action){
    switch (action.type) {
        case actions.TAKE_DECISION:
            return {
                ...state,
                history: action.payload.decision
            };
    
        default:
            return state
    }
}