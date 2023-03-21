/*
작성자 서종현
작성일 23.02.28.
제휴제공 글 상세페이지
*/

import { useEffect, useState } from "react"
import axios from "axios"
import dompurify from 'dompurify';
import { useLocation } from "react-router-dom"
import './css/coalitionPost.css'

function CoalitionPost() {

    // prop에서 postId 추출
    const { state } = useLocation()
    const postId = state

    // 
    const [ coalitionPost, setCoalitionPost ] = useState({})

    // 더미데이터 입력
    useEffect(() => {
        axios({
            url: "https://" + process.env.REACT_APP_API_ADDRESS + "/companypost/" + postId,
            method: "GET"
        })
            .then(res => setCoalitionPost(res.data))
            .catch(err => console.log(err))
        
    }, [ postId ])

    // XSS 공격 방지를 위한 DOMPurify
    // 사용자가 입력한 값에서 잠제적 위협이되는 요소들을 걸러낸다
    const sanitizer = dompurify.sanitize;

    return (
        <div className="coalitionPost_outterBox">
            <h1 className="coalitionPost_headline">제휴 제공글 상세페이지</h1>
            <div dangerouslySetInnerHTML={{__html: sanitizer(coalitionPost.body)}} />
        </div>
    )
}

export default CoalitionPost