import { Task } from "./task";
import { type StageType } from "./startup-progress.types";
import "./stage.css";

type Props = StageType;

const Stage = ({ order, name, tasks }: Props) => {
  return (
    <>
      <div className="stage-title">
        <div>{order}</div>
        <h3>{name}</h3>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id}>
            <Task {...task} />
          </li>
        ))}
      </ul>
    </>
  );
};

export { Stage };
