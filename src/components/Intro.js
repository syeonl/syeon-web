import React from 'react';
import styled, { keyframes } from "styled-components";
import bgVisual from '../assets/images/bgVisual.png';

const Intro = () => {
    return (
        <section id="intro">
            <div className="intro_inner">
                <BackGroundVisual/>

                <div className="tit_wrap">
                    <strong>즐기면서 하니까 더 잘하는 웹퍼블리셔</strong>
                    <h1 className="tit">
                        UI/UX developer
                    </h1>
                    <p className='txt'>
                    안녕하세요! 
                    인터랙티브한 웹페이지를 좋아하는 승연입니다.<br/>
                    기억에 남고 눈이 편한 매력적인 UI를 만들고<br/>
                    탄탄한 코드로 편의와 만족을 주는 UX를 개발하는 일을 해요.
                    </p>
                </div>
                
                <div className="intro_lines bottom" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>

            </div>
        </section>
    )
}

export default Intro;

const BgVisual = keyframes`
    to {
        background-position: -100% 100px;
    }
`;
const BackGroundVisual = styled.div`
    animation: ${BgVisual} 30s linear infinite;
    background-image: url(${bgVisual});
    background-position: 100% 100px;
    background-repeat: repeat-x;
    background-size: 40% auto;
    height: 100vh;
    top: 0;
    left: 0;
    pointer-events: none;
    position: fixed;
    user-select: none;
    width: 100%;
    z-index: -1;
`;

