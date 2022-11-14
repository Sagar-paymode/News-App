export const incFunction = (num) =>{
    return {
        type:"INCREMENT",
        payload:num
    }
}

export const decFunction = () =>{
    return {
        type:"DECREMENT"
    }
}
