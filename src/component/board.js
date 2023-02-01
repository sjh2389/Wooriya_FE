/*
작성자 서종현
작성일 23.02.01.
게시판, 게시글 컴포넌트
data를 index로 정렬하여 보여준다
*/

import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import './css/board.css'

// index와 data 모두 Array
function Board (indexs, postInfoPackage) {

    const navigate = useNavigate()

    // head는 게시물 표 상단의 구분자들
    let head = indexs.map((index, i) => {
        return <th style={{whiteSpace: 'nowrap'}} key={i}>{index}</th>
    })

    // 게시물 표의 body
    const tableBody = postInfoPackage.map((postInfo, i)=> {

        // Array 내부의 Obj를 표에 뿌려주기 위한 과정
        let row = []

        // 게시글 클릭시 상세페이지로 이동기증 제공하는 함수
        function handleClick(postId) {
            // 현제 url에서 id 추가한 페이지로 이동
            navigate(`${window.location.pathname}/${postId}`, {state: postId})
        }

        // 각 postInfo에 있는 정보 중, index와 일치하는 것을 찾아 표에 뿌려준다
        indexs.forEach(element => { 
            // 글번호는 서버에서 보내주지 않음으로 여기서 넣어준다
            if (element === "글번호") {
                row.unshift(
                    <td key={"number"}>{JSON.stringify(i+1)}</td>
                )

            } else if (element !== "글번호") {
                row.push(
                    <td key={element}>
                        {postInfo[ element ]}
                    </td>
                )
            }
        });

        return (
            <tr onClick={() => handleClick(postInfo.id)} key={i}>
                {row}
            </tr>
        )
    })

    return (
        <Table bordered hover variant="dark">
            <thead>
                <tr>
                    {head}
                </tr>
            </thead>
            <tbody>
                {tableBody}
            </tbody>
        </Table>
    );
}

export default Board