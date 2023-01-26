/*
작성자 서종현
작성일 23.01.24.
게시글 작성 컴포넌트
writing_elements는 제목, 제공제휴유형과 같은 기입요소 Array
setInputBuffer는 작성된 페이지를 부모요소로 올려주기위한 함수
*/

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './css/boardPostForm.css'

function BoardForm(writing_elements, setInputBuffer) {

    // elements 기입요소들 위한 input란 생성
    let inputs = []

    writing_elements.map((value, i) => (          
        inputs.push(
            <div key={i} className='boardPostForm_tag'>
                <div>{value}</div>
                <input className='boardPostForm_input' id={value} onChange={inPutChange}></input>
            </div>
        )
    ))

    // 사용자의 input입력값 핸들링
    function inPutChange(e) {
        const id = e.target.id
        const value = e.target.value
        setInputBuffer(prev => ({...prev, [id] : value}))
    }

    return(
        <div>
            <div className='boardPostForm_tagBox'>{inputs}</div>
            <ReactQuill className='boardPostForm_quill' />
        </div>
    )
}

export default BoardForm