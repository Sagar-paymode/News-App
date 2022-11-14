import {
    USER_DATA_REQUEST,
    USER_DATA_SUCCESS,
    USER_DATA_FAILED 
} from './../types/userTypes'

const initialState = {
    users:[],
    loading:true,
    success:'',
    error:''
}

const userReducer = (state = initialState, action) =>{

    switch(action.type){
        case USER_DATA_REQUEST:
            return {
                loading:true,
                ...state
            }
        case USER_DATA_SUCCESS:
            return {
                loading:false,
                users: action.payload,
                success:'Data fetched successfully!'
            }

        case USER_DATA_FAILED:
            return {
                loading:false,
                error:action.payload,
                ...state
            }
        default: return state

    }
}

export default userReducer