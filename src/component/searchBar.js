/*
작성자 서종현
작성일 23.02.06.
검색창 컴포넌트
부모에게 카테고리를 받아
선택된 카테고리와 검색어를 객체형태로 반환한다.
*/

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState } from 'react';

function SearchBar( indexs, searchEngine ) {

    // seletedIndex는 선택된 카테고리, keyWord는 검색어
    const [ indexAndWord, setIndexAndWord ] = useState(
        {
            selectedIndex: "전체",
            keyWord: "",
        }
    )
    
    // 검색창의 분류 버튼 선택지 생성, 기본값인 '전체' 먼저 넣어준다.
    let dropdownItems = [
        <Dropdown.Item key={"defalut"} onClick={onDropDown}>전체</Dropdown.Item>
    ]
    
    for (const i in indexs) {
        dropdownItems.push(
            <Dropdown.Item key={i} onClick={onDropDown}>{indexs[i]}</Dropdown.Item>
        )
    }
    
    // 카테고리 선택 핸들링
    function onDropDown(e) {
        setIndexAndWord(prev => {return {...prev, selectedIndex: e.target.innerText}})
    }

    // 검색어 입력 핸들링
    function onKeyWord(e) {
        setIndexAndWord(prev => {return {...prev, keyWord: e.target.value}})
    }

    return(
        <InputGroup className="mb-3">
            <DropdownButton
                variant="outline-secondary"
                title={indexAndWord["selectedIndex"]}
            >
                {dropdownItems}
            </DropdownButton>
            <Form.Control
                onChange={onKeyWord}
                onKeyUp = {() => {searchEngine(indexAndWord)}}
                value={indexAndWord["keyWord"]}
            />
            <Button 
                variant="outline-secondary" 
                id="button-addon1"
                onClick={() => searchEngine(indexAndWord)}    
            >
                검색
            </Button>
        </InputGroup>
    )
}

export default SearchBar