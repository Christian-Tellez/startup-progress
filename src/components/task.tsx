import { type TaskType } from "./startup-progress.types";

type Props = TaskType & {
  setChecked: (id: string, cheched: boolean) => void;
};

const Task = ({ id, name, checked, setChecked }: Props) => {
  return (
    <>
      <input
        type="checkbox"
        id={id}
        name={name}
        aria-label="task"
        checked={checked}
        onChange={(e) => {
          setChecked(id, e.target.checked);
        }}
      />
      <label htmlFor={id}>{name}</label>
    </>
  );
};

export { Task };
