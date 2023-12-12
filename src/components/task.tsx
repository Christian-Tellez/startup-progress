import { TaskType } from "./types";

type Props = TaskType;

const Task = ({ name, checked }: Props) => {
  return (
    <>
      <input type="checkbox" name={name} aria-label="task" checked={checked} />
      <label htmlFor={name}>Horns</label>
    </>
  );
};

export { Task };
