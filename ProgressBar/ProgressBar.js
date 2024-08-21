import { useEffect, useState } from "react";
import "./tabs.css";

export default function ProgressBar() {
  const [bar, setBar] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBar((prevValue) => {
        if (prevValue >= 100) {
          clearInterval(interval);
        }
        return Math.min(prevValue + 5, 100);
      });
    }, 150);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="container">
      <div
        style={{ transform: `translateX(${bar - 100}%)` }}
        className="progress"
      ></div>
    </div>
  );
}
