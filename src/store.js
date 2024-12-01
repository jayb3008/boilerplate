import { createStore } from 'redux';

// Initial state
const initialState = {
    parsedData: []
};

// Reducer
const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PARSED_DATA':
            return { ...state, parsedData: action.payload };
        default:
            return state;
    }
};

// Create store
const store = createStore(dataReducer);

export default store;
