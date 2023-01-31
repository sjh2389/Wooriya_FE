/*
작성자 서종현
작성일 23.01.31.
react-draft-wysiwyg 텍스트 에디터 컴포넌트
*/

import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';


function Draft() {
    
    const [ editorState, setEditorState ] = useState(EditorState.createEmpty())
 
    return(
        <container>
            <Editor
                placeholder="게시글을 작성해주세요"
                editorState={editorState}
                onEditorStateChange={setEditorState}
                localization={{ locale: "ko" }}
                toolbar={{
                    inline: { inDropdown: true },
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    link: { inDropdown: true },
                    history: { inDropdown: true },
                  }}
                editorStyle={{
                    height: "300px",
                    width: "100%",
                    border: "3px solid lightgray",
                    padding: "20px",
                }}
            />
        </container>
    )
}

export default Draft