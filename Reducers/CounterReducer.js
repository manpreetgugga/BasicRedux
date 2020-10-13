import * as Actions from '../Actions/ActionTypes'

const counterReducer = (state = { value : 0}, action) => {
    switch (action.type) {
        case Actions.INCREMENET_COUNT:
            console.log("incre reducer")
            obji =  {
               ...state,
               value : state.value + 3 
            }
            console.log(JSON.stringify(obji))
            return obji
        case Actions.DECREMENET_COUNT:
            console.log("dec reducer")
            objd = {
                ...state,
                value : state.value - 1 
             }
             console.log(JSON.stringify(objd))
             return objd
         default:
            return state;
    }
}

export default counterReducer;
