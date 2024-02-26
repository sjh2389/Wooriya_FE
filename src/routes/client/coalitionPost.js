/*
작성자 서종현
작성일 23.05.13.
제휴제공 글 상세페이지
제휴 글 수정 및 삭제 페이지와 연결되어있다
*/

import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';

import { connect } from "react-redux"
import { SignOutToStore } from "../../component/store/slice/userStateSlice"

import axios from "axios"
import dompurify from 'dompurify';
import { useLocation } from "react-router-dom"
import './css/coalitionPost.css'

function CoalitionPost({userObjInStore, SignOutToStore}) {

    const navigate = useNavigate()

    // prop에서 postId 추출
    const { state } = useLocation()
    const postId = state

    const [ coalitionPost, setCoalitionPost ] = useState({})

    console.log(userObjInStore)

    // 백에서 해당 포스트 받아오기
    useEffect(() => {
        axios({
            url: "https://" + process.env.REACT_APP_API_ADDRESS + "/companypost/" + postId,
            method: "GET"
        })
            .then(res => setCoalitionPost(res.data))
            .catch(err => console.log(err))
        
    }, [ postId ])

    // 해당 포스트 삭제하기
    function handleDelete () {
        axios({
            url: "https://" + process.env.REACT_APP_API_ADDRESS + "/companypost/delete" + postId,
            method: "delete"
        })
            .then(res => {
                console.log(res)
                alert("삭제에 성공했습니다.")
            })
            .catch(err => {
                console.log(err)
                alert(`삭제에 실패했습니다 : 오류코드 ${err}`)
            })
    }

    // 해당 포스트 수정하는 페이지로 넘어가기
    function handleUpdate () {
        navigate(`client/coalitionUpdate/${postId}`, {state: postId, post: coalitionPost})
    }

    // XSS 공격 방지를 위한 DOMPurify
    // 사용자가 입력한 값에서 잠제적 위협이되는 요소들을 걸러낸다
    const sanitizer = dompurify.sanitize;

    return (
        <div className="coalitionPost_outterBox">
            <h1 className="coalitionPost_headline">제휴 제공글 상세페이지</h1>
            <div dangerouslySetInnerHTML={{__html: sanitizer(coalitionPost.body)}} />
            {/* 현재 접속한 사용자와 작성자 대조 후 수정, 삭제 버튼 표시 */}
            {/* { () ? "" :
                <div>
                    <button>수정하기</button>
                    <button>삭제하기</button>
                </div>
            } */}
            <div>
                <button onClick={handleUpdate}>수정하기</button>
                <button onClick={handleDelete}>삭제하기</button>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {userObjInStore: state}
}
function mapDispatchToProps(dispatch) {
    return {
        SignOutToStore: (userObj) => dispatch(SignOutToStore(userObj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CoalitionPost)