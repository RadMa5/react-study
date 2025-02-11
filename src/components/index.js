import { combineReducers } from "redux";
import visibilityFilter from "./VisibilityFilter";
import todos from "./todos";

export const indexReducer =() => {
    return combineReducers({ todos, visibilityFilter });
    
};
