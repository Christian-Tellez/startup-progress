import { useState } from "react";
import "./App.css";
import { AddTaskForm } from "./components/add-task-form";
import { StartupProgress } from "./components/startup-progress";
import {
  STAGE_NAMES,
  StageName,
  type StageType,
} from "./components/startup-progress.types";

const initialStages: StageType[] = [
  { order: 1, name: STAGE_NAMES.FOUNDATION, tasks: [] },
  { order: 2, name: STAGE_NAMES.DISCOVERY, tasks: [] },
  { order: 3, name: STAGE_NAMES.DELIVERY, tasks: [] },
];

const App = () => {
  const localStorageStages = localStorage.getItem("stages");
  const currentStages = localStorageStages
    ? (JSON.parse(localStorageStages) as StageType[])
    : initialStages;
  const [stages, setStages] = useState<StageType[]>(currentStages);

  const handleAddTask = (taskName: string, stageName: StageName) => {
    const newTask = { id: crypto.randomUUID(), name: taskName, checked: false };
    const updatedStages = stages.map((stage) => {
      if (stage.name === stageName) {
        stage.tasks.push(newTask);
      }
      return stage;
    });
    setStages(updatedStages);
    localStorage.setItem("stages", JSON.stringify(updatedStages));
  };

  return (
    <>
      <AddTaskForm addTask={handleAddTask} />
      <StartupProgress stages={stages} />
    </>
  );
};

export { App };
