const initialState = {
    history: 'start',
    isMessageDisplay: false,
    isLoading: false
}

const MAP_ACTIONS = {
    'takeDecision' : (state, action) =>  ({
        ...state,
        history: action.payload.decision,
        isLoading: action.payload.loading
    }),

    'toggleMessage' : (state) =>  ({
        ...state,
        isMessageDisplay: !state.isMessageDisplay
    }),

    'reset' : (state) =>  ({
        ...state,
        history: 'start',
        isLoading: false
    })
}

export default function reducer(state = initialState,action){
    return MAP_ACTIONS[action.type] ? MAP_ACTIONS[action.type](state,action) : state;
}