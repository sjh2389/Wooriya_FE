import {createStore} from "redux"

const signIn = "signIn"
const signOut = "signOut"

function SignIn(userObj) {
    return{type: signIn, userObj: userObj}
}
function SignOut() {
    return{type: signOut}
}

function reducer(state = {}, action) {
    switch(action.type){
        case signIn:
            return action.userObj
        case signOut:
            return ""
        default:
            return state
    }
}

const store = createStore(reducer);

export default store;
export const actionCreators = {
    SignIn,
    SignOut,
}