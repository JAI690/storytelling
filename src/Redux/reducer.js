import * as actions from './actionTypes';

export default function reducer(state,action){
    switch (action.type) {
        case actions.TAKE_DECISION:
            return {
                ...state,
                history: action.paylad.history,
            }
    
        default:
            return state
    }
}