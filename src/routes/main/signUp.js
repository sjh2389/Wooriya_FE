/*
작성자 서종현
최종수정일 23.02.28.
사용자 회원가입 페이지
*/

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {

    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        title: "",
        registNumber: "",
        role:"",
    });
    const [isCorrect, setIsCorrect] = useState(false);

    const onchange = (e) => {
        setUserInfo({...userInfo, [e.target.id]: e.target.value});
    };
    
    const validate = async () => {
        if (userInfo.role !== "USER" && "PROVIDER"){
            messageError("회원유형을 선택해주세요.");
        } else if (userInfo.email === "") {
            messageError("이메일을 입력해주세요.");
        } else if (
            !/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(userInfo.email)
        ) {
            messageError("이메일을 주소 형식을 확인해주세요.");
        } else if (userInfo.password === "") {
            messageError("비밀번호를 입력해주세요.");
        } else if (
            !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/.test(userInfo.password)
        ) {
            messageError("비밀번호를 형식에 맞춰 정확히 입력해주세요.");
        } else if (!isCorrect) {
            messageError("비밀번호 확인이 일치하지 않습니다");
        // } else if (!/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9| |]+$/.test(userInfo.title)) {
        //   messageError("기관명을 정확히 입력해주세요.");
        // } else if (userInfo.registNumber === "") {
        //   messageError("사업자 등록번호를 입력해주세요.");
        } else {
        let res = await axios({
            url: "https://" + process.env.REACT_APP_API_ADDRESS + "/user/join",
            method: "POST",
            data: {
            memberId: userInfo.email,
            password: userInfo.password,
            role: userInfo.role,
            },
            // withCredentials: true,
        });

        if (res.status === 200) {
            messageInfo(JSON.stringify(res.data));
            navigate("/");
        }
        }
    };

    const messageInfo = (msg) => {
        console.log(msg);
    };

    const messageError = (msg) => {
        console.log(msg);
    };

    
    return (
        <div>
            <div>
                <div>
                    회원유형
                </div>
                <select
                    onChange={onchange}
                    id="role"
                >
                    <option value="">---선택해주십시오---</option>
                    <option value="USER"> 제휴 소비자 </option>
                    <option value="PROVIDER"> 제휴 공급자 </option>
                </select>
            </div>
            <div>
                <div>
                    이메일
                </div>
                <input
                    type="text"
                    onChange={onchange}
                    id="email"
                />
            </div>
            <div>
                <div>
                    비밀번호
                </div>
                <input
                    type="password"
                    onChange={onchange}
                    id="password"
                />
            </div>
            <div>
                <div>
                    비밀번호확인
                </div>
                <input
                    type="password"
                    onChange={(e) => {
                        return e.target.value === userInfo.password
                        ? setIsCorrect(true)
                        : setIsCorrect(false);
                    }}
                />
            </div>
            <div>
                <div>
                    기관명
                </div>
                <span>
                    <input
                        type="text"
                        onChange={onchange}
                        id="title"
                    />
                    <button>기관 인증</button>
                </span>
            </div>
            <div>
                <div>
                    사업자등록번호
                </div>
                <input
                    type="text"
                    onChange={onchange}
                    id="registNumber"
                />
            </div>
            <br />
            <div>
                <button 
                    onClick={validate}
                >
                    가입 완료
                </button>
            </div>
        </div>
    );
};

export default SignUp;
