import "../styles.css";
export default function DayTimeSlots() {
  const slots = Array.from({ length: 24 }, (_, index) => index);
  console.log(slots);
  return (
    <>
      {slots.map((slot) => {
        return <div className="slot">{slot}:00 </div>;
      })}
    </>
  );
}
