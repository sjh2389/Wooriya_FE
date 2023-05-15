/*
작성자 서종현
최종수정일 23.02.28.
로그인 페이지
*/

import { useState } from "react";
import { connect } from "react-redux";
import { SignInToStore } from "../../component/store/slice/userStateSlice";
import axios from "axios";
import { useCookies } from 'react-cookie'
import { useNavigate } from "react-router-dom";

function SignIn ({userObjInStore, SignInToStore}) {

    // jwt 토큰 쿠키에 저장하는 부분
    const [ , setCookie] = useCookies(["Authorization"])
    const navigate = useNavigate()


    const [signinObj, setSigninObj] = useState({
        email: "",
        password: "",
    });
    function onchange(e) {
        const SignInObj = signinObj
        SignInObj[e.target.id] = e.target.value;
        setSigninObj(SignInObj);
    };
    function messageInfo(msg) {
        console.log(msg);
    };
    
    
    // 입력값 확인후 BE에 로그인 요청보내기
    function signin() {
        if (signinObj.email === "") {
          console.log("아이디를 입력해주세요.");
        } else if (signinObj.password === "") {
          console.log("비밀번호를 입력해주세요.");
        } else {
            axios({
                url: "https://" + process.env.REACT_APP_API_ADDRESS + '/user/login',
                method: "POST",
                data: {
                    email: signinObj.email,
                    password: signinObj.password,
                },
                withCredentials: true,
            })
            .then((data) => {
                const cookieValue =`${data.data.accessToken}`
                setCookie("Authorization", cookieValue, [])
                axios({
                    url: process.env.REACT_APP_API_ADDRESS + "/user/info",
                    method: "GET",
                    withCredentials: true,
                    headers: {authorization: `Bearer ${cookieValue}`},
                })
                .then((data) => {
                    SignInToStore(data.data)
                    navigate('/')
                    messageInfo("로그인 성공!");
                })   
            })
            .catch((err) => {
                console.log("가입정보가 틀립니다.");
            });
        }
    }
    return (
        <div>
            <div>
                <h1>로그인</h1>
                <dl>
                    <dt>아이디</dt>
                    <dd>
                        <input
                            type="text"
                            placeholder="EMAIL"
                            onChange={onchange}
                            id="email"
                        />
                    </dd>
                </dl>
                <dl>
                    <dt>비밀번호</dt>
                    <dd>
                        <input
                            type="password"
                            placeholder="PASSWORD"
                            onChange={onchange}
                            id="password"
                        />
                    </dd>
                </dl>
                <button onClick={signin}>
                    로그인
                </button>
                <button onClick={() => {navigate('/signup')}}>
                    회원가입
                </button>
                <button onClick={() => {navigate('/findid')}}>
                    아이디/비밀번호 찾기
                </button>
            </div>
        </div>
    )

}

function mapStateToProps(state) {
    return {userObjInStore: state}
}
function mapDispatchToProps(dispatch) {
    return {
        SignInToStore: (userObj) => dispatch(SignInToStore(userObj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (SignIn);