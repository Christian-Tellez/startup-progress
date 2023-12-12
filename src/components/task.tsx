import { type TaskType } from "./startup-progress.types";

type Props = TaskType;

const Task = ({ id, name, checked }: Props) => {
  return (
    <>
      <input
        type="checkbox"
        id={id}
        name={name}
        aria-label="task"
        checked={checked}
        onChange={() => {}}
      />
      <label htmlFor={id}>{name}</label>
    </>
  );
};

export { Task };
