import { SEARCH_USERS, GET_USER, CLEAR_USERS, SET_LOADING, GET_REPOS, PROFILE_ERROR } from "../actions/types";

const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
};

export default function(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case SEARCH_USERS:
            return {
                ...state,
                users: payload,
                loading: false
            };

        case GET_USER:
            return {
                ...state,
                user: payload,
                loading: false
            };


        case CLEAR_USERS:
            return {
                ...state,
                users: [],
                loading: false
            };

        case GET_REPOS:
            return {
                ...state,
                repos: payload,
                loading: false
            };

        case PROFILE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };

        case SET_LOADING:
            return {
                ...state,
                loading: true
            };

        default:
            return state;
    }
};