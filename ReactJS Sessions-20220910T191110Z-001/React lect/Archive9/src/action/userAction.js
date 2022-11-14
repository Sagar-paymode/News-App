import {
    USER_DATA_REQUEST,
    USER_DATA_SUCCESS,
    USER_DATA_FAILED 
} from './../types/userTypes'

import axios from 'axios'


export const getUserData = () =>{
    return (dispatch) =>{
        dispatch({type:USER_DATA_REQUEST})
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            dispatch({type:USER_DATA_SUCCESS,payload:res.data})
        }).catch((err)=>{
            dispatch({type:USER_DATA_FAILED,payload:err.message})
        })
    }
}