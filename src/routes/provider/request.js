/*
작성자 서종현
작성일 23.01.31.
제휴 서비스 요청페이지
*/

import { useEffect, useState } from "react"
import axios from "axios"
import Board from "../../component/board"
import './css/request.css'
import BoardPostForm from "../../component/boardPostForm"
import { Link } from "react-router-dom";

// import DummyCoalition from '../../dummy/dummyCoalition'

function Request() {

    // 게시판 게시글 상단 머리글
    const [ indexs, setIndexs ] = useState([])
    // 서버에서 받아온 게시판 글
    const [ coalitionPosts, setCoalitionPosts ] = useState([])
    // 사용자가 작성한 게시글
    const [ inputBuffer, setInputBuffer ] = useState([])

    // 더미데이터 입력
    useEffect(() => {
        setIndexs(["글번호", "coSize", "coType", "title", "groupName"])

        axios({
            url: 'http://localhost:8080/grouppost',
            method: "GET"
        })
            .then(res => setCoalitionPosts(res.data))
            .catch(err => console.log(err))
        
    }, [])

    // 사용자 작성 페이지 전송
    function onSubmit() {

        console.log(inputBuffer)
        setCoalitionPosts(prev => [...prev, inputBuffer])

        // axios({
        //     url: 'http://localhost:8080/grouppost/post',
        //     method: "POST",
        //     data: inputBuffer,
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8'
        //     }
        // })
        // .then(res => {
        //     console.log(res.data)
        //     setCoalitionPosts(prev => [...prev, inputBuffer])
        //     })
        //     .catch(err => console.log(err))
    }

    return (
        <div className="coalition_outterBox">
            <h1 className="coalition_headline">
                제휴요청 게시판
            </h1>
            {Board(indexs, coalitionPosts)}
            <h1 className="coalition_headline">
                제휴요청 글 작성
            </h1>
            {BoardPostForm([ "coSize", "coType", "title", "groupName" ], inputBuffer, setInputBuffer)}
            <div className="coalition_btnBox">
                <Link to={"/"}>
                    <button className="coalition_btn">뒤로가기</button>
                </Link>
                <button className="coalition_btn" onClick={onSubmit}>작성완료</button>
            </div>
        </div>
    )
}

export default Request