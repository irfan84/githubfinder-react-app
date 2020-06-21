import { SEARCH_USERS, GET_USER, GET_REPOS, PROFILE_ERROR, SET_LOADING } from "./types";
import axios from 'axios';


// Search Github Users
export const searchUser = text => async dispatch => {
    try {
        const headers = {
            'Authorization': `token ${process.env.REACT_APP_API_KEY}`
        };
        const res = await axios.get(`https://api.github.com/search/users?q=${text}`, headers);
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        });
    }
    catch(err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {status: err.message}
        });
    }
};

// Get User
export const getUser = login => async dispatch => {
    try {
        const headers = {
            'Authorization': `token ${process.env.REACT_APP_API_KEY}`
        };
        const res = await axios.get(`https://api.github.com/users/${login}`, headers);
        dispatch({
            type: GET_USER,
            payload: res.data
        });
    }
    catch(err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {status: err.message}
        });
    }
};

// Get User
export const getRepos = login => async dispatch => {
    try {
        const headers = {
            'Authorization': `token ${process.env.REACT_APP_API_KEY}`
        };
        const res = await axios.get(`https://api.github.com/users/${login}/repos`, headers);
        dispatch({
            type: GET_REPOS,
            payload: res.data
        });
    }
    catch(err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {status: err.message}
        });
    }
};

// Set Loading
export const setLoading = () => dispatch => {
    dispatch({
        type: SET_LOADING,
    });

     };