import { useEffect } from "react";
export default function useClickOutside(elementRef, handler) {
  useEffect(() => {
    const cb = (e) => {
      if (!elementRef.current?.contains(e.target)) {
        handler();
      }
    };
    document.addEventListener("click", cb);

    return () => {
      document.removeEventListener("click", cb);
    };
  }, [elementRef, handler]);
}
