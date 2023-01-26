/*
작성자 서종현
작성일 23.01.19.
웹 최초 접속 페이지
*/

import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate()

    return (
        <div>
            <h1>웹 최초 접속 페이지</h1>
            <button onClick={() => {navigate("/coalition")}}>제휴 검색</button>
            <button onClick={() => {navigate("/coalition/post")}}>제휴 등록</button>
            <button onClick={() => {navigate("/request")}}>맞춤 제휴 요청</button>
        </div>
    )
}

export default Home