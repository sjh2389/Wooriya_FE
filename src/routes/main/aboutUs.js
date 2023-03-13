/*
작성자 서종현
최종수정일 23.03.12.
회사소개 랜딩페이지
*/

import "./css/aboutUs.css"
import img_handShake from "../../component/img/aboutUs_handShake.png"
import img_rocket from "../../component/img/aboutUs_rocket.png"
import img_consumerPost from "../../component/img/aboutUs_consumerPost.png"
import img_category from "../../component/img/aboutUs_category.png"
import img_step1 from "../../component/img/aboutUs_step1.png"
import img_step2 from "../../component/img/aboutUs_step2.png"
import img_step3 from "../../component/img/aboutUs_step3.png"
import img_step4 from "../../component/img/aboutUs_step4.png"
import img_supplier from "../../component/img/aboutUs_supplier.png"
import img_consumer from "../../component/img/aboutUs_consumer.png"

function AboutUs() {

    return(
        <div>
            <div className="aboutUs_backmargin">
                <div className="aboutUs_firstframe">
                    <img className="aboutUs_margin_auto" src={img_handShake} alt="handShake"/>
                    <p className="aboutUs_headLine_1">
                        클릭으로 시작하는 제휴<br/>
                        <span style={{color:"#267DFF"}}>우리야</span>
                    </p>
                    <p className="aboutUs_underArrow">
                        내려서 확인해보기 <br /><br />
                        ↓
                    </p>
                </div>
                <div className="aboutUs_frame66">
                    <p className="aboutUs_headLine_3">
                        우리야 비즈니스 모드
                    </p>
                    <p className="aboutUs_headLine_2">
                        간편 등록부터 <br />
                        나를 원하는 고객까지
                    </p>
                    <div className="aboutUs_cardBox">
                        <div className="aboutUs_card_1">
                            <p className="aboutUs_subTitle_1">
                                등록은 최대한 간편하게 하세요!
                            </p>
                            <p className="aboutUs_subTitle_2">
                                나를 기다리는 고객님들을 만나기 위한<br/>
                                가장 빠른 준비시간
                            </p>
                            <img className="aboutUs_cardImg_1" src={img_rocket} alt="img_rocket"/>
                        </div>
                        <div className="aboutUs_card_1">
                            <p className="aboutUs_subTitle_1">
                                나를 기다리는 고객을 만나세요!
                            </p>
                            <p className="aboutUs_subTitle_2">
                                내가 가장 빠르고 편하게<br/>
                                많은 고객들을 만나는 수단
                            </p>
                            <img className="aboutUs_cardImg_1" style={{width:"300px"}} src={img_consumerPost} alt="img_consumerPost"/>
                        </div>
                        <div className="aboutUs_card_1">
                            <p className="aboutUs_subTitle_1">
                                다양한 제휴가 기다리고 있습니다
                            </p>
                            <p className="aboutUs_subTitle_2">
                                다양한 제류를 기다리는 많은 고객<br/>
                                나의 영업이 가장 편리한 서비스
                            </p>
                            <img className="aboutUs_cardImg_1" src={img_category} alt="img_category"/>
                        </div>
                    </div>
                </div>
                <div className="aboutUs_frame67">
                    <p className="aboutUs_headLine_2">
                        지금 알아볼래요?<br/>
                        우리야 비즈니스 등록방법
                    </p>
                    <div className="aboutUs_cardBox">
                        <div className="aboutUs_card_2">
                            <img className="aboutUs_cardImg_2" src={img_step1} alt=""/>
                            <p className="aboutUs_subTitle_1">우리야 가입하기</p>
                        </div>
                        <div className="aboutUs_card_2">
                            <img className="aboutUs_cardImg_2" src={img_step2} alt=""/>
                            <p className="aboutUs_subTitle_1">비스니스 신청하기</p>
                            <p className="aboutUs_subTitle_2">나의 비즈니스 분야와 회사를 신청해주세요</p>
                        </div>
                        <div className="aboutUs_card_2">
                            <img className="aboutUs_cardImg_2" src={img_step3} alt=""/>
                            <p className="aboutUs_subTitle_1">비즈니스 계정 수락 대기</p>
                            <p className="aboutUs_subTitle_2">운영지원 팀에서 수락을 해야 활동이 가능해요</p>
                        </div>
                        <div className="aboutUs_card_2">
                            <img className="aboutUs_cardImg_2" src={img_step4} alt=""/>
                            <p className="aboutUs_subTitle_1">우리야 활동 준비 끝!</p>
                        </div>
                    </div>
                </div>
                <div className="aboutUs_frame68">
                    <p className="aboutUs_headLine_3">
                        고객을 만나는 방법
                    </p>
                    <p className="aboutUs_headLine_2">
                        나를 찾아오는, <br />
                        내가 찾아가는 고객접근
                    </p>
                    <div className="aboutUs_cardBox">
                        <div className="aboutUs_card_3">
                            <p className="aboutUs_subTitle_1">
                                나의 정보가 나를 필요로하는 고객에게
                            </p>
                            <p className="aboutUs_subTitle_2">
                                비즈니스에 올린 정보는<br/>
                                나의 정보가 필요한 유저에게 노출됩니다.
                            </p>
                            <img className="aboutUs_cardImg_3" src={img_supplier} alt=""/>
                        </div>
                        <div className="aboutUs_card_4">
                            <p className="aboutUs_subTitle_1">
                                나를 원하는 고객의 정보가 나의 화면에
                            </p>
                            <p className="aboutUs_subTitle_2">
                                일반 유저가 필요한 것을 올린 정보는<br/>
                                나의 화면에 노출됩니다.
                            </p>
                            <img className="aboutUs_cardImg_3" src={img_consumer} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aboutUs_frame75">
                <p className="aboutUs_footbarText_1">
                    아주대학교 창업동아리 넛지(Nudge)
                </p>
                <p className="aboutUs_footbarText_2">
                    Copyright @ Nudge in Ajou University < br/>
                    대표 민정근 | 경기도 수원시 영통구 월드컵로 206 < br/>
                    기타 투자/제휴 문의 : alswjdrms153@ajou.ac.kr < br/>
                </p>
            </div>
        </div>
    )
}

export default AboutUs