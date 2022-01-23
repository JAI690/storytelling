import * as actions from './actionTypes';

export const takeDecision = (decision,loading) => ({
    type: actions.TAKE_DECISION,
    payload: {
        decision
    }
});