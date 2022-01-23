import * as actions from './actionTypes';

export default function reducer(state = {history: 'start', isLoading: false},action){
    switch (action.type) {
        case actions.TAKE_DECISION:
            return {
                ...state,
                history: action.payload.decision,
                isLoading: action.payload.loading
            };
    
        default:
            return state
    }
}