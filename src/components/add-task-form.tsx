import React from "react";
import { STAGE_NAMES, StageName } from "./startup-progress.types";
import "./add-task-form.css";

// Workaround to avoid hustle with submit event type
type FormElements = HTMLFormControlsCollection & {
  task: HTMLInputElement;
  stage: HTMLInputElement;
};
type AddTaskFormElement = HTMLFormElement & {
  readonly elements: FormElements;
};

type Props = {
  addTask: (task: string, stage: StageName) => void;
};

const AddTaskForm = ({ addTask }: Props) => {
  const handleSubmit = (event: React.FormEvent<AddTaskFormElement>) => {
    event.preventDefault();
    const task = event.currentTarget.elements.task.value;
    const stage = event.currentTarget.elements.stage.value;
    task && addTask(task, stage as StageName);
    // Doing this instead of event.currentTarget.reset() cause the user
    // will probably want to add more Tasks to the same Stage
    event.currentTarget.elements.task.value = "";
    event.currentTarget.elements.task.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="task" type="text" placeholder="New task" autoFocus />
      <select name="stage" className="stage-select">
        {Object.values(STAGE_NAMES).map((stage) => (
          <option key={stage} value={stage}>
            {stage}
          </option>
        ))}
      </select>
      <input type="submit" value="Add" />
    </form>
  );
};

export { AddTaskForm };
