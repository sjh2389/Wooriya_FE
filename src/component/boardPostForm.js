/*
작성자 서종현
작성일 23.02.06.
게시글 작성 컴포넌트
writing_elements는 제목, 제공제휴유형과 같은 기입요소 Array
setInputBuffer는 작성된 페이지를 부모요소로 올려주기위한 함수
*/

import { useMemo, useRef } from 'react'
import ReactQuill from 'react-quill'
import axios from "axios"
import 'react-quill/dist/quill.snow.css'
import './css/boardPostForm.css'

function BoardForm(writing_elements, inputBuffer, setInputBuffer) {

    const quillRef = useRef()

    // elements 기입요소들 위한 input란 생성
    let inputs = []

    writing_elements.map((value, i) => (          
        inputs.push(
            <div key={i} className='boardPostForm_tag'>
                <div>{value}</div>
                <input type={(value === "coSize")? "number" : ""} className='boardPostForm_input' id={value} onChange={inPutChange}></input>
            </div>
        )
    ))

    // 사용자의 input입력값 핸들링
    function inPutChange(e) {
        const id = e.target.id
        const value = e.target.value
        setInputBuffer(prev => ({...prev, [id] : value}))
    }

    // 사용자의 Quill 텍스트 편집기 입력값 핸들링
    function inQuillChange(value) {
        setInputBuffer(prev => ({...prev, body : value}))
    }

    // Quill 텍스트 편집기 상단 툴바에 들어갈 버튼들 지정
    const modules = useMemo( () => {
        return {
            toolbar: { 
                // 툴바에 넣을 기능들을 순서대로 나열하면 된다.
                container: [
                    ["bold", "italic", "underline", "strike", "blockquote"],
                    [{ size: ["small", false, "large", "huge"] }, { color: [] }],
                    [
                        { list: "ordered" },
                        { list: "bullet" },
                        { indent: "-1" },
                        { indent: "+1" },
                        { align: [] },
                    ],
                    ["image", "video"],
                ],
                handlers: {
                    image: imageHandler
                }
            }    
        }
    }, [])

    // image 업로드 시 서버로 전송 후 url 받아오는 함수
    function imageHandler() {

        // input 요소 생성 후 기본 설정값 기입
        const input = document.createElement('input')
        input.setAttribute('type', 'file')
        input.setAttribute('accept', 'image/*')

        // 이미지 업로드 창 열기
        input.click()

        // 이미지 formData에 실어보내 url로 변환하기
        input.addEventListener('change', async () => {
            const formData = new FormData()
            const reader = new FileReader()

            reader.readAsDataURL(input.files[0])

            reader.onload = () => {
                console.log(reader.result)
            }


            formData.append('img', input.files[0])

            try {
                // axios({
                //     method: "post",
                //     url: "http://localhost:8080/uploadimage",
                //     data: formData,
                //     headers: {"Contnet-Type": "multipart/form-data"}
                // })

                const res = await axios.post('http://localhost:8080/uploadimage', formData)
                const imgUrls = res.data

                // 현제 커서 위치 반환
                const editor = quillRef.current.getEditor()
                const range = editor.getSelection().index

                // 에디터에 이미지 삽입
                editor.insertEmbed(range, 'image', imgUrls)
            }
            catch (error) {
                console.log("이미지 업로드 에러발생: " + error)
            }

        })
    }

    return(
        <div>
            <div className='boardPostForm_tagBox'>{inputs}</div>
            <ReactQuill
                className='boardPostForm_quill'
                onChange={inQuillChange}
                value={inputBuffer["body"]}
                modules={modules}
                ref={quillRef}
            />
        </div>
    )
}

export default BoardForm