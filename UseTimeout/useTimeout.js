import { useEffect, useRef } from "react";

export default function useTimeout(callback, delay) {
  const callbackRef = useRef(callback);
  //referring to updated callback
  callback.current = callback;
  useEffect(() => {
    const timerID = setTimeout(callbackRef, delay);
    return () => {
      clearTimeout(timerID);
    };
  }, [delay]);
}
