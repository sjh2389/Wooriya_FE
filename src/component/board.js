/*
작성자 서종현
작성일 23.01.23.
게시판, 게시글 컴포넌트
data를 index로 정렬하여 보여준다
*/

import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import './css/board.css'

// index와 data 모두 Array
function Board (indexs, datas) {

    const navigate = useNavigate()

    // head는 게시물 표 상단의 구분자들
    let head = indexs.map((index, i) => {
        return <th style={{whiteSpace: 'nowrap'}} key={i}>{index}</th>
    })

    // 게시물 표의 body
    const body = datas.map((data, i)=> {

        // Array 내부의 Obj를 표에 뿌려주기 위한 과정
        let row = []
        // 글번호는 서버에서 보내주지 않음으로 여기서 넣어준다
        indexs.forEach(element => { 
            if (element === "글번호") {
                row = [<td  key={"number"}>{JSON.stringify(i+1)}</td>]
            } else if (element !== "글번호") {
                row.push(<td onClick={() => {navigate("/")}} key={element}>{data[element]}</td>)
            }
        });

        return (
            <tr key={i}>
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
                {body}
            </tbody>
        </Table>
    );
}

export default Board