import React, { useState } from 'react'
import { contactText } from '../contents/Source'

const Contact = () => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };
    
    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <section id="contact">
            <div className="contact_inner">
                <div className="contact_title">Contact</div>
                <div className="contact_text">
                <p className='defu'>
                    저에 대해 더 궁금하신 내용이 있으시면 언제든 연락해 주세요 :)
                    <span className={isHovering ? "change" : ""}>
                        언제든 환영이에요 🙌
                    </span>
                </p>
                    {contactText.map((text, key) => (
                        <div key={key}>
                            <a href={text.link} 
                                onMouseOver={handleMouseOver} 
                                onMouseOut={handleMouseOut}>
                                    {text.title}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Contact;