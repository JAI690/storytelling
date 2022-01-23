import * as actions from './actionTypes';

export const takeDecision = decision => ({
    type: actions.TAKE_DECISION,
    payload: {
        decision
    }
});