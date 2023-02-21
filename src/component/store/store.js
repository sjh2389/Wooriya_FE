/*
작성자 서종현
최종수정일 23.02.21.
redux store 최상단부
userState: 사용자의 로그인 상태 관리 redux
*/

import { configureStore } from "@reduxjs/toolkit"
import userStateSlice from "./slice/userStateSlice"


// // export되어 reducer 변경에 사용될 action들
// const signIn = "signIn"
// const signOut = "signOut"

// function SignIn(userObj) {
//     return{type: signIn, userObj: userObj}
// }
// function SignOut() {
//     return{type: signOut}
// }


// // 유저권한 저장 reducer
// function userStateReducer(state = {}, action) {
//     switch(action.type){
//         case signIn:
//             return action.userObj
//         case signOut:
//             return ""
//         default:
//             return state
//     }
// }

// reducer들 생성
const store = configureStore({
    reducer: {
        userState: userStateSlice
    }
})

export default store;
// export const actionCreators = {
//     SignIn,
//     SignOut,
// }