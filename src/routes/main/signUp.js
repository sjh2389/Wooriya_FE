/*
작성자 서종현
최종수정일 23.02.20.
사용자 회원가입 페이지
*/

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function SignUp() {

    const navigate = useNavigate();
    const [issuerInfo, setIssuerInfo] = useState({
        email: "",
        password: "",
        title: "",
        registNumber: "",
        requiredVC: "",
        desc: "",
        walletAddress: "",
    });
    const [isCorrect, setIsCorrect] = useState(false);
    const onchange = (e) => {
        issuerInfo[e.target.id] = e.target.value;
        setIssuerInfo(issuerInfo);
    };
    const validate = async () => {
        if (issuerInfo.email === "") {
        messageError("이메일을 입력해주세요.");
        } else if (
        !/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(
            issuerInfo.email
        )
        ) {
        messageError("이메일을 주소 형식을 확인해주세요.");
        } else if (issuerInfo.password === "") {
        messageError("비밀번호를 입력해주세요.");
        } else if (
        !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/.test(
            issuerInfo.password
        )
        ) {
        messageError("비밀번호를 형식에 맞춰 정확히 입력해주세요.");
        } else if (!isCorrect) {
        messageError("비밀번호 확인이 일치하지 않습니다");
        // } else if (!/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9| |]+$/.test(issuerInfo.title)) {
        //   messageError("기관명을 정확히 입력해주세요.");
        // } else if (issuerInfo.registNumber === "") {
        //   messageError("사업자 등록번호를 입력해주세요.");
        } else {
        let res = await axios({
            url: `http://localhost:8080/user/join`,
            method: "POST",
            data: {
            memberId: issuerInfo.email,
            password: issuerInfo.password,
            role: "ISSUER",
            // title: issuerInfo.title,
            // requiredVC: [...issuerInfo.requiredVC],
            // desc: issuerInfo.desc,
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
            <p>
                이메일
            </p>
            <input
                type="text"
                onChange={onchange}
                id="email"
            />
        </div>
        <div>
            <p>
                비밀번호
            </p>
            <input
                type="password"
                onChange={onchange}
                id="password"
            />
        </div>
        <div>
            <p>
                비밀번호확인
            </p>
            <input
                type="password"
                onChange={(e) => {
                    return e.target.value === issuerInfo.password
                    ? setIsCorrect(true)
                    : setIsCorrect(false);
                }}
            />
        </div>
        <div>
            <p>
                기관명
            </p>
            <input
                type="text"
                onChange={onchange}
                id="title"
            />
        </div>
        <div>
            <p>
                사업자등록번호
            </p>
            <input
                type="text"
                onChange={onchange}
                id="registNumber"
            />
        </div>
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
