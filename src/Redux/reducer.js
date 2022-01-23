import * as actions from './actionTypes';

const initialState = {
    history: 'start',
    isMessageDisplay: false,
    isLoading: false
}

export default function reducer(state = initialState,action){
    switch (action.type) {
        case actions.TAKE_DECISION:
            return {
                ...state,
                history: action.payload.decision,
                isLoading: action.payload.loading
            };
        case actions.TOGGLE_MESSAGE:
            return {
                ...state,
                isMessageDisplay: !state.isMessageDisplay
            }
        case actions.RESET:
            return {
                ...state,
                history: 'start',
                isLoading: false
            }
        default:
            return state
    }
}