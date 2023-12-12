import "./App.css";
import { AddTaskForm } from "./components/add-task-form";
import { StartupProgress } from "./components/startup-progress";
import {
  STAGE_NAMES,
  type StageType,
} from "./components/startup-progress.types";

const stages: StageType[] = [
  { id: 1, name: STAGE_NAMES.FOUNDATION, tasks: [] },
  { id: 2, name: STAGE_NAMES.DISCOVERY, tasks: [] },
  { id: 3, name: STAGE_NAMES.DELIVERY, tasks: [] },
];

const App = () => {
  return (
    <>
      <AddTaskForm />
      <StartupProgress stages={stages} />
    </>
  );
};

export { App };
