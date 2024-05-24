import React from 'react'
import { siteText } from '../contents/Source'

const Site = () => {
    return (
        <section id="site">
            <div className="site_inner">
                <div className="site_title">
                    Site Coding <em>나의 작업물</em>
                </div>
                <div className="site_wrap">
                    {siteText.map((text, key) => (
                        <div className={`site_item s${key + 1}`} key={key}>
                            <span className="num">{key + 1}. </span>
                            <div className="text">
                                <div>{text.text[0]}</div>
                                <div>{text.text[1]}</div>
                                <div>{text.text[2]}</div>
                            </div>
                            <h3 className="title">
                                {text.title}
                            </h3>
                            <div className="btn">
                                <a href={text.code} target="_blank" rel="noopener noreferrer">code</a>
                                <a href={text.view} target="_blank" rel="noopener noreferrer">view</a>
                            </div>
                            <div className="info">
                                <span>{text.info[0]}</span>
                                <span>{text.info[1]}</span>
                                <span>{text.info[2]}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Site;