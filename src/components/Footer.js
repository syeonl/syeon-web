import React from 'react';
import { footerText } from '../contents/Source';

const Footer = () => {
    return (
        <footer id="footer" role="contentinfo">
            <div className="footer_inner">
                <div className="footer_info">
                    <div className="left">
                        <div className="tit">
                            <h3>education</h3>
                        </div>
                        <div className="txt">
                            <p><span>2023 - 현재</span> 학점은행제 컴퓨터공학과 4년학사 졸업예정</p>
                            <p><span>2023.11 ~ 2024.01</span> AWS환경 데이터 분석 플랫폼 풀스택개발 교육 이수- 이젠아카데미</p>
                            <p><span>2021.3 ~ 2021.07</span> UI/UX 실무자 양성 (웹퍼블리셔, 프론트엔드) 교육 이수- 더조은컴퓨터아카데미</p>
                            <p><span>2014</span> 전산회계 2급 (한국세무사회)</p>
                            <p><span>2014</span> ITQ 엑셀, 한글 (한국생산성본부)</p>
                        </div>
                    </div>
                    <div className="right">
                        <h3>my link</h3>
                        <ul>
                            {footerText.map((text, key) => (
                                <li key={key}>
                                    <a href={text.link} rel="noopener noreferrer" target="_blank">{text.title}</a>
                                    <em> {text.desc}</em>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="footer_right">
                    &copy; update May 10, 2024<br />
                    Seung Yeon Lee &#127892;
                </div>
            </div>
        </footer>
    )
}

export default Footer