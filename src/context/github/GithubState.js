import React, {useReducer} from "react";
import {GithubContext} from './githubContext';
import {alertReducer} from "../alert/alertReducer";
import {githubReducer} from "./GithubReducer";
import {CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING} from "../types";

const GithubState = ({children}) => {
    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    };

    const [state, dispatch] = useReducer(githubReducer, initialState);

    const search = async value => {
        // тут запрос на сервер
        setLoading();
        dispatch({
           type: SEARCH_USERS,
           payload: []
        });
    };

    const getUser = async name => {
        // запрос на сервер
        setLoading();
        dispatch({
            type: GET_USER,
            payload: {}
        })
    };

    const getRepos = async name => {
        // запрос на сервер
        setLoading();
        dispatch({
            type: GET_REPOS,
            payload: []
        })
    };

    const clearUsers = () => dispatch({type: CLEAR_USERS});

    const setLoading = () => dispatch({type: SET_LOADING});

    const {user, users, repos, loading} = state;

    return (
        <GithubContext.Provider
            value={{
                search, setLoading, getRepos, clearUsers, getUser, user, users, repos, loading
            }}
        >
            {children}
        </GithubContext.Provider>
    )
};

export default GithubState;
