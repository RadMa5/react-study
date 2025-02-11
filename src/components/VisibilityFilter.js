import { SET_FILTER } from "./ActionTypes";
import { VISIBILITY_FILTERS } from "./Constants";

const initialState = VISIBILITY_FILTERS.ALL;

const visibilityFilter = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER:
            {
                return action.payload.filter;
            }
        default:
            {
                return state;
            }
    }
};

export default visibilityFilter;