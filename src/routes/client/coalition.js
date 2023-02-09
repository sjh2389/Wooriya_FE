/*
작성자 서종현
작성일 23.01.26.
제휴제공 게시판
*/

import { useEffect, useState } from "react"
import axios from "axios"
import Board from "../../component/board"
import './css/coalition.css'
import BoardPostForm from "../../component/boardPostForm"
import { Link } from "react-router-dom";

import DummyCoalition from '../../dummy/dummyCoalition'

function Coalition() {

    // 게시판 게시글 상단 머리글
    const [ indexs, setIndexs ] = useState([])
    // 서버에서 받아온 게시판 글
    const [ coalitionPosts, setCoalitionPosts ] = useState([])
    // 사용자가 작성한 게시글
    const [ inputBuffer, setInputBuffer ] = useState([])

    // 더미데이터 입력
    useEffect(() => {
        setIndexs(["글번호", "title", "companyName", "coType", "coSize" ])
        setCoalitionPosts( DummyCoalition )

        // axios({
        //     url: 'http://localhost:8080/companypost',
        //     method: "GET"
        // })
        //     .then(res => setCoalitionPosts(res.data))
        //     .catch(err => console.log(err))
        
    }, [])

    // 사용자 작성 페이지 전송
    function onSubmit() {

        //api 테스트
        // console.log(inputBuffer)
        // const test = new FormData()
        // test.append("img", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAABTCAYAAAAV13zdAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADfGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjI3Njc3ZThkLTNjMWMtZmE0NS1iYTZlLTY3NWFlMzJmODkwYyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQjMxMzExOTgzNzYxMUVBOEQ5MERCMEM4MENFMDgzQyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQjMxMzExODgzNzYxMUVBOEQ5MERCMEM4MENFMDgzQyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM2MzgyMUU1MzQ3QUVBMTE4QTBGQ0QzMzA2N0M4OEE3IiBzdFJlZjpkb2N1bWVudElEPSJhZG9i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")
        // console.log( test.get("img"))

        axios({
            url: 'http://localhost:8080/companypost/post',
            method: "POST",
            data: test,
        })
        .then(res => {
            console.log(res.data)
            setCoalitionPosts(prev => [...prev, inputBuffer])
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="coalition_outterBox">
            <h1 className="coalition_headline">
                제휴제공 게시판
            </h1>
            {Board(indexs, coalitionPosts)}
            <h1 className="coalition_headline">
                제휴제공 포스트 작성
            </h1>
            {BoardPostForm([ "title", "companyName", "coType", "coSize" ], inputBuffer, setInputBuffer)}
            <div className="coalition_btnBox">
                <Link to={"/"}>
                    <button className="coalition_btn">뒤로가기</button>
                </Link>
                <button className="coalition_btn" onClick={onSubmit}>작성완료</button>
            </div>
        </div>
    )
}

export default Coalition