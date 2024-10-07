import "./styles.css";
import DragAndDrop from "./components/DragAndDrop";

const initialData = {
  Todo: [
    "Design UI Mockups",
    "Setup Project Repository",
    "Write unit test cases",
    "Integrate Payment gateway",
  ],
  "In Progress": ["Develop Authentication Flow", "Implement Cases"],
  Completed: [
    "Set up CI/CD Pipeline",
    "Conduct code reviews",
    "Deploy initial version to staging",
  ],
};

export default function App() {
  return (
    <div className="App">
      <DragAndDrop initialState={initialData} />
    </div>
  );
}
