import { useState, useEffect } from "react";
import "../styles.css";
import Signal from "./DayTimeSlots";

export default function Traffic({ lights = ["green", "yellow", "red"] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setActive((prevActive) => {
        return (prevActive + 1) % lights.length;
      });
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);
  return (
    <>
      {lights.map((color, index) => {
        return <Signal isActive={active === index} color={color} />;
      })}
    </>
  );
}
