/*
작성자 서종현
작성일 23.02.01.
제휴제공 글 상세페이지
*/

import { useEffect, useState } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"
import './css/coalitionPost.css'

function CoalitionPost() {

    // prop에서 postId 추출
    const { postId } = useLocation()

    // 
    const [ coalitionPost, setCoalitionPost ] = useState()

    // 더미데이터 입력
    useEffect(() => {
        axios({
            url: `http://localhost:8080/companypost/${postId}`,
            method: "GET"
        })
            .then(res => setCoalitionPost(res.data))
            .catch(err => console.log(err))
        
    }, [ postId ])

    return (
        <div className="coalitionPost_outterBox">
            <h1 className="coalitionPost_headline">제휴 제공글 상세페이지</h1>
            {coalitionPost}
        </div>
    )
}

export default CoalitionPost