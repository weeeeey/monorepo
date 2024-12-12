import { useEffect, useState, useRef } from "react";
import { throttle } from "lodash";

interface ReturnType {
  isDown: boolean;
}

/**
 *  스크롤 방향을 감지하는 커스텀 훅
 * @param throttleTime
 * @returns {
 *   isDown: boolean;
 * }
 */
const useScrollDirection = (throttleTime = 200): ReturnType => {
  const [isDown, setIsDown] = useState(false);
  const prevScrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const curScroll = window.scrollY;
      if (curScroll > prevScrollRef.current) setIsDown(true);
      if (curScroll < prevScrollRef.current) setIsDown(false);
      prevScrollRef.current = curScroll;
    }, throttleTime); // 200ms 간격으로 스크롤 이벤트 처리

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollRef]);

  return { isDown };
};

export default useScrollDirection;
