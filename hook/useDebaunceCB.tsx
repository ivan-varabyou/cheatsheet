import { useEffect, useRef } from "react";

type TFunction<T extends any[]> = (...args: T) => void;
function useDebounceCB<T extends TFunction<any[]>, R extends number>(
  cb: T,
  delay: R
) {
  const timerRef = useRef<null | number>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const debounceCallback = (...args: T[]): void => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      cb(...args);
    }, delay);
  };
  return debounceCallback;
}

export default useDebounceCB;
