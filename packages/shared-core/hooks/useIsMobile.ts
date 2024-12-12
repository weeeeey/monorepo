"use client";
import { useEffect, useState } from "react";

/**
 * 주어진 너비를 기준으로 현재 화면이 모바일인지 여부를 반환하는 커스텀 훅
 *
 * @param width - 기준 너비 (기본값: 420px)
 * @returns boolean - 모바일 여부
 */
const useIsMobile = (width = 420): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${width}px)`);

    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    // 초기 렌더링 시 확인
    setIsMobile(mediaQuery.matches);

    // 미디어 쿼리 변경 시 이벤트 등록
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
