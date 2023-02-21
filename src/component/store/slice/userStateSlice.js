/*
작성자 서종현
최종수정일 23.02.21.
여러 store 중 userStateStore 설정페이지
*/

import { createSlice } from "@reduxjs/toolkit";

const userStateSlice = createSlice({

    name: "userState",                 // store 이름 지정
    initialState: "GUEST",             // 초깃값 지정
    reducers: {                        // store 수정에 사용될 action 정보기입
        SignInToStore(state, action){  // 로그인
            state = action.userObj
        },
        SignOutToStore(state) {        // 로그아웃 후 사용자 권한 GUEST로 초기화
            state = "GUEST"
        }
    }

})

// createSlice가 reducers 기반으로 자동생성해준 action들 export 
export const { SignInToStore, SignOutToStore } = userStateSlice.actions

// 이하 상동
export default userStateSlice.reducer