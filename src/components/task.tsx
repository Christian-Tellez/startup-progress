import { type StageType, type TaskType } from "./startup-progress.types";

type Props = TaskType & {
  setChecked: (id: string, cheched: boolean) => void;
  unlocked: StageType["unlocked"];
};

const Task = ({ id, name, checked, setChecked, unlocked }: Props) => {
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
        disabled={!unlocked}
        title={
          unlocked ? "" : "Complete all tasks in previous stages to unlock this"
        }
      />
      <label htmlFor={id}>{name}</label>
    </>
  );
};

export { Task };
