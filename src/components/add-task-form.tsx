import React from "react";
import { STAGE_NAMES } from "./types";

// Workaround to avoid hustle with submit event type
type FormElements = HTMLFormControlsCollection & {
  task: HTMLInputElement;
  stages: HTMLInputElement;
};
type AddTaskFormElement = HTMLFormElement & {
  readonly elements: FormElements;
};

const AddTaskForm = () => {
  const handleSubmit = (event: React.FormEvent<AddTaskFormElement>) => {
    event.preventDefault();
    console.log(event.currentTarget.task.value);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="task" type="text" placeholder="New task" />
      <select name="stages">
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
