import React, { useRef } from 'react';
import { motion, useScroll } from "framer-motion";
import { workText } from '../contents/Source';

const Work = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
      });

    return (
        <section id='work'>
            <div className='work_inner'>
                <div className='work_left'>
                    <h2 className="tit" data-aos="zoom-in-up">
                    <em>즐기면서 나답게</em> 
                    Work Experience 
                    </h2>
                    <p data-aos="fade-up" data-aos-anchor-placement="bottom-center">
                    웹 표준과 웹 접근성을 준수하여 웹페이지를 만들고<br/> 다양한 툴을 다룰줄 알아요 <br/>
                    HTML5, CSS3, Transition, Scss, Media, Query, JavaScript, React, Figma, Zeplin, and ing💜
                    </p>
                </div>
                <div className="work_right" ref={ref}>
                    <motion.div
                        className="progress_bar"
                        style={{ scaleX: scrollYProgress }}
                    />
                    <motion.div
                        className="mprogress_bar"
                        style={{ scaleY: scrollYProgress }}
                    />
                    {workText.map((text, ) => (
                        <div>
                            <span>{text.date}</span>
                            <h3>{text.title}</h3>
                            <p>
                                {text.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;