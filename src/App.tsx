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
  { order: 1, name: STAGE_NAMES.FOUNDATION, tasks: [], unlocked: true },
  { order: 2, name: STAGE_NAMES.DISCOVERY, tasks: [], unlocked: false },
  { order: 3, name: STAGE_NAMES.DELIVERY, tasks: [], unlocked: false },
];

const App = () => {
  const localStorageStages = localStorage.getItem("stages");
  const currentStages = localStorageStages
    ? (JSON.parse(localStorageStages) as StageType[])
    : initialStages;
  const [stages, setStages] = useState<StageType[]>(currentStages);

  const handleAddTask = (taskName: string, stageName: StageName) => {
    const newTask = { id: crypto.randomUUID(), name: taskName, checked: false };
    // TODO: refactor this. Maybe use reducer
    const updatedStages = stages.map((stage) => {
      if (stage.name === stageName) {
        stage.tasks.push(newTask);
      }
      return stage;
    });

    setStages(updatedStages);
    localStorage.setItem("stages", JSON.stringify(updatedStages));
  };

  const handleChecked = (
    id: string,
    checked: boolean,
    stageName: StageName
  ) => {
    // TODO: this code could be cleaner too
    const updatedStages = stages.map((stage) => {
      if (stage.name !== stageName) return stage;

      stage.tasks.map((task) => {
        if (task.id === id) task.checked = checked;
        return task;
      });

      return stage;
    });

    setStages(updatedStages);
    localStorage.setItem("stages", JSON.stringify(updatedStages));
  };

  const allowedStages = stages.map((stage) => {
    if (stage.order === 1) return stage;
    const priorStages = stages.filter((s) => s.order < stage.order);

    stage.unlocked = false;
    if (priorStages.every((s) => s.tasks.every((t) => t.checked === true)))
      stage.unlocked = true;

    return stage;
  });

  console.log(allowedStages);

  return (
    <>
      <AddTaskForm addTask={handleAddTask} />
      <StartupProgress stages={allowedStages} setChecked={handleChecked} />
    </>
  );
};

export { App };
