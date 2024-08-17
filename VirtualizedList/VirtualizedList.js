import { useState } from "react";

function VirtualizedList({ list, height, itemHeight, width }) {
  const [indices, setIndices] = useState([0, Math.floor(height / itemHeight)]);

  const handleScroll = (e) => {
    const { scrollTop } = e.target;
    const newStartIndex = Math.floor(scrollTop / itemHeight);
    const newEndIndex = newStartIndex + Math.floor(height / itemHeight);
    setIndices([newStartIndex, newEndIndex]);
  };

  const visibleList = list.splice(indices[0], indices[1] + 1);
  return (
    <div
      className="container"
      style={{
        height,
        width,
        backgroundColor: "grey",
        overflow: "auto",
      }}
      onScroll={handleScroll}
    >
      <div style={{ height: list.length * itemHeight, position: "relative" }}>
        {visibleList.map((item, index) => {
          return (
            <div
              className="item"
              style={{
                height: itemHeight,
                background: "coral",
                borderTop: "5px solid grey",
                position: "absolute",
                top: (indices[0] + index) * itemHeight,
                width: "100%",
                textAlign: "center",
              }}
            >
              {"item" + item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default VirtualizedList;
