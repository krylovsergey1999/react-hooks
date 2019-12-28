import {} from "../types";
import {SEARCH_USERS} from "../types";
import {GET_REPOS} from "../types";
import {GET_USER} from "../types";
import {SET_LOADING} from "../types";
import {CLEAR_USERS} from "../types";

const handlers = {
    [SEARCH_USERS]: (state, {payload}) => ({...state, users: payload, loading: false}),
    [GET_REPOS]: (state, {payload}) =>  ({...state, repos: payload, loading: false}),
    [GET_USER]: (state, {payload}) =>  ({...state, user: payload, loading: false}),
    [CLEAR_USERS]: (state, {payload}) =>  ({...state, users: []}),
    [SET_LOADING]: (state, {payload}) =>  ({...state, loading: true}),
    DEFAULT: state => state
};

export const githubReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
};
