import { useEffect, useState } from "react";

const getNextLight = (current) => {
  switch (current) {
    case "red":
      return "green";
    case "green":
      return "yellow";
    case "yellow":
      return "red";
    default:
      return "red";
  }
};

const getDuration = (light) => {
  switch (light) {
    case "red":
      return 4000;
    case "green":
      return 3000;
    case "yellow":
      return 500;
    default:
      return 1000;
  }
};

export const App = () => {
  const [light, setLight] = useState("red");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLight(getNextLight(light));
    }, getDuration(light));

    return () => clearTimeout(timer);
  }, [light]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div className={`light red ${light === "red" ? "active" : ""}`}></div>
      <div
        className={`light yellow ${light === "yellow" ? "active" : ""}`}
      ></div>
      <div className={`light green ${light === "green" ? "active" : ""}`}></div>
    </div>
  );
};

export default App;
