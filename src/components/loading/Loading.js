import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './loading.scss'

const Loading = ({ onComplete }) => {
  const loadingRef = useRef(null);
  const progressBarRef = useRef(null);
  const numRef = useRef(null);

  useEffect(() => {
    gsap.to(numRef.current, {
      startAt: { innerText: 0 },
      innerText: 100,
      duration: 2,
      roundProps: "innerText",
      ease: "none",
      onUpdate: () => {
        gsap.set(progressBarRef.current, { width: `${numRef.current.innerText}%` });
      }
    });

    gsap.to(loadingRef.current, {
      duration: 1.2,
      top: "-110vh",
      ease: "power3.out",
      delay: 2,
      onComplete: onComplete // 로딩 완료 시 외부에서 제공된 콜백 실행
    });
  }, [onComplete]); // 외부에서 제공된 onComplete가 변경될 때만 useEffect 재실행

  return (
    <div ref={loadingRef} className="loading active">
      <div ref={numRef} className="num">0%</div>
      <div className="progress">
        <span ref={progressBarRef} style={{ width: '0%' }}></span>
      </div>
    </div>
  );
};

export default Loading;
