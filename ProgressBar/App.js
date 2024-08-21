import { useState } from "react";
import ProgressBar from "./components/Tabs";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      {show ? <ProgressBar /> : ""}
      <button onClick={() => setShow(!show)}>Toggle</button>
    </div>
  );
}

export default App;
