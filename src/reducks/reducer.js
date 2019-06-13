import axios from 'axios';

const initialState ={
    username: '',
    password: '',
    loggedIn: false,
    user: [],
    postTitle: '',
    postDescription: '',
    postImage: ''
}

const UPDATE_USERNAME = 'UPDATE_USERNAME';
const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
const REGISTER = 'REGISTER';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const UPDATE_TITLE = 'UPDATE_TITLE'
const UPDATE_DESC = 'UPDATE_DESC'
const UPDATE_IMAGE = 'UPDATE_IMAGE'

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
export const register = (username, password)=>{
    // console.log(username, password)
    let user = axios
        .post('/api/register', {username, password})
        .then(response => response.data)
        // .catch(console.log('Error while registering.'))
    return{
        type: REGISTER,
        payload: user
    }
}
export const login = (username, password)=>{
    // console.log(username, password)
    let user = axios
        .post('/api/login', {username, password})
        .then(response => response.data)
        // .catch(console.log('Error while LOGINing.'))
    return{
        type: LOGIN,
        payload: user
    }
}
export const logout = ()=>{
    let user = axios.post('/api/logout')
    return{
        type: LOGOUT
    }
}
export const updateTitle =(title)=>{
    return{
        type: UPDATE_TITLE,
        payload: title
    }
}
export const updateDescription =(desc)=>{
    return{
        type: UPDATE_DESC,
        payload: desc
    }
}
export const updateImage =(image)=>{
    return{
        type: UPDATE_IMAGE,
        payload: image
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
        case REGISTER:
            return{
                ...state,
                user: action.payload,
                loggedIn: true
            }
        case LOGIN:
            return{
                ...state,
                loggedIn: true
            }
        case LOGOUT:
            return{
                ...state,
                loggedIn: false
            }
        case UPDATE_TITLE:
            return{
                ...state,
                postTitle: action.payload
            }
        case UPDATE_DESC:
            return{
                ...state,
                postDescription: action.payload
            }
        case UPDATE_IMAGE:
            return{
            ...state,
            postImage: action.payload
            }
    }
}

export default reducer