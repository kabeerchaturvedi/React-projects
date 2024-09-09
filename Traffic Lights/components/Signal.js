import "../styles.css";
export default function Signal({ color, isActive }) {
  return (
    <div
      className="signal"
      style={{ backgroundColor: `${isActive ? color : "grey"}` }}
    ></div>
  );
}
