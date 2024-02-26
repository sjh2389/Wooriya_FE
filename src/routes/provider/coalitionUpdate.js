/*
작성자 서종현
작성일 23.05.13.
제휴제공 글 수정 페이지
*/

import { useEffect, useState } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"
import './css/coalition.css'
import BoardPostForm from "../../component/boardPostForm"
import { Link } from "react-router-dom";
// import DummyCoalition from '../../dummy/dummyCoalition'

function CoalitionUpdate() {

    const { state, coalitionPost } = useLocation()
    const postId = state


    // 사용자가 작성한 게시글
    const [ inputBuffer, setInputBuffer ] = useState(coalitionPost)

    // 더미데이터 입력
    useEffect(() => {
        setIndexs(["글번호", "title", "companyName", "coType", "coSize" ])
        // setCoalitionPosts( DummyCoalition )

        axios({
            url: "https://" + process.env.REACT_APP_API_ADDRESS + '/companypost',
            method: "GET"
        })
            .then(res => setCoalitionPosts(res.data))
            .catch(err => console.log(err))
        
    }, [])

    // 사용자 작성 페이지 전송
    function onSubmit() {
        console.log(inputBuffer)

        axios({
            url: "https://" + process.env.REACT_APP_API_ADDRESS + '/companypost/update',
            method: "POST",
            data: inputBuffer,
        })
        .then(res => {
            console.log(res.data)
            window.location.reload()
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="coalition_outterBox">
            <h1 className="coalition_headline">
                제휴제공 포스트 수정 페이지
            </h1>
            {BoardPostForm([ "title", "coType", "coSize" ], inputBuffer, setInputBuffer)}
            <div className="coalition_btnBox">
                <Link to={"/"}>
                    <button className="coalition_btn">뒤로가기</button>
                </Link>
                <button className="coalition_btn" onClick={onSubmit}>작성완료</button>
            </div>
        </div>
    )
}

export default CoalitionUpdate