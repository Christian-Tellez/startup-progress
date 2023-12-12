import "./App.css";
import { AddTaskForm } from "./components/add-task-form";
import { StartupProgress } from "./components/startup-progress";
import { STAGE_NAMES, StageType } from "./components/types";

const stages: StageType[] = [
  { id: 1, name: STAGE_NAMES.FOUNDATION, tasks: [] },
  { id: 2, name: STAGE_NAMES.DISCOVERY, tasks: [] },
  { id: 3, name: STAGE_NAMES.DELIVERY, tasks: [] },
];

function App() {
  return (
    <>
      <AddTaskForm />
      <StartupProgress stages={stages} />
    </>
  );
}

export default App;
