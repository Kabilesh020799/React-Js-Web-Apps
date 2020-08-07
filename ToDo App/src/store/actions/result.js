import * as actionType from './actionType'

export const saveResults = (value) => {
    return {
        type: actionType.ADDRESULTS,
        value: value
    }
}

export const addresults = (value) => {
    return dispatch => {
        setTimeout(()=>{
            dispatch(saveResults(value))
        },2000)
    }
}

export const deleteres = (id,value) => {
    return {
        type: actionType.DELETE,
        id: id
    }
}
