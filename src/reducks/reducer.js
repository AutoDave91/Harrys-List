import axios from 'axios';

const initialState ={
    username: '',
    password: '',
    loggedin: false
}

const UPDATE_USERNAME = 'UPDATE_USERNAME';
const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
const REGISTER = 'REGISTER';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

export const updateUsername = (username)=>{
    return{
        type: UPDATE_USERNAME,
        payload: username
    }
}
export const updatePassword = (password)=>{
    return{
        type: UPDATE_PASSWORD,
        payload: password
    }
}

function reducer(state= initialState, action){
    switch(action.type){
        case UPDATE_USERNAME:
            return{
                ...state,
                username: action.payload
            }
        case UPDATE_PASSWORD:
            return{
                ...state,
                password: action.payload
            }
        default: return state
    }
}

export default reducer