import { useEffect, useRef, useState } from "react";

interface IntersectionObserverProps<T> {
  threshold?: number;
  once?: boolean;
}

const useIntersectionObserver = <T extends Element>(
  options?: IntersectionObserverProps<T>,
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const { once = true, threshold = 0.5 } = options || {};
    const targetNode = ref.current;
    if (!targetNode) return;

    const observer = new IntersectionObserver(
      (entites) => {
        const entry = entites[0];
        setIsIntersecting(entry?.isIntersecting ?? false);

        if (entry?.isIntersecting && once) {
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(targetNode);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return { isIntersecting, ref };
};

export default useIntersectionObserver;
