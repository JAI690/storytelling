import * as actions from './actionTypes';

export const takeDecision = (decision,loading) => ({
    type: actions.TAKE_DECISION,
    payload: {
        decision,
        loading
    }
});

export const toggleMessage = () => ({
    type: actions.TOGGLE_MESSAGE
});

export const reset = () => ({
    type: actions.RESET
})