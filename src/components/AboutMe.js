import React, { useEffect } from 'react';
import { aboutText } from '../contents/Source';
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
    useEffect(() => {
        AOS.init();
      },[])

    return (
        // 즐기면서 나답게
        <section id="about">
            <div className="about_inner">
                <h2 className="about_tit"data-aos="fade-up"data-aos-anchor-placement="top-center">
                About Me
                </h2>
                {aboutText.map((about) => (
                <div className="about_wrap" data-aos="fade-up"data-aos-offset="500"data-aos-duration="300">
                    <div className='img'>
                        <img src={about.img} alt='내 사진' />
                    </div>
                    <div className='txt'>
                        <h3 className="name" data-aos="fade-up"data-aos-offset="500"data-aos-duration="500">안녕하세요!<br/>
                        브랜드의 가치가 주목 받을 수 있게 웹사이트를 만들어 나가는<br/>
                        3년차 웹퍼블리셔 이승연입니다.</h3>
                        <p className='info' data-aos="fade-left"data-aos-offset="500"data-aos-duration="500">웹퍼블리싱을 빠삭하게 다루고 있어요. <br/>
                        어디에서도 잘 보이는 반응형, 웹 접근성과 웹 표준을 고려한정보에 맞는 의미 있는 태그들을 사용하고, 디자인을 입히기 위한 유지 보수에 적합한 스타일 시트를 사용하며, 사용자 등장에 반응하기 위한 동적인 JS를 구현하는 등 효율적이고 제대로 된 정보를 웹페이지를 통하여 전달할 수 있습니다.
                        <br/><br/>
                        더 나아가 Vue나 React에 관심을 가지고 공부하고 있고 React/TypeScript 등 프레임워크 환경에서 컴포넌트 단위의 마크업 작업을 능숙하게 할 수 있어요. 
                        <br/><br/>
                        새로운 것을 알게 되는 설렘 속에서 계속 저를 성장 시키겠습니다.
                        항상 사용자와 고객을 고려하여 소통을 통해 여러 사람과 함께 더 나은 방향을 찾아서 고민하며 보다 나은 방식으로 문제점을 해결해 나가겠습니다!
                        </p>
                    </div>
                </div>
            ))}
            </div>
        </section>
    )
}

export default AboutMe;