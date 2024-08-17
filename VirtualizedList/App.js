import VirtualizedList from "./components/Tabs";
const LIST = Array.from({ length: 10000 }, (_, index) => index + 1);

function App() {
  return (
    <div>
      <VirtualizedList list={LIST} height={400} width={300} itemHeight={35} />
    </div>
  );
}

export default App;
