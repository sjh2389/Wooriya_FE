/*
작성자 서종현
최종수정일 23.02.21.
redux store 최상단부
userState: 사용자의 로그인 상태 관리 redux
*/

import { configureStore } from "@reduxjs/toolkit"
import userStateSlice from "./slice/userStateSlice"


// reducer들 생성
const store = configureStore({
    reducer: {
        userState: userStateSlice
    }
})

export default store;
