import { Task } from "./task";
import { type StageName, type StageType } from "./startup-progress.types";
import "./stage.css";

type Props = StageType & {
  setChecked: (id: string, cheched: boolean, stageName: StageName) => void;
};

const Stage = ({ order, name, tasks, setChecked }: Props) => {
  const onSetChecked = (id: string, checked: boolean) => {
    setChecked(id, checked, name);
  };

  const allTasksCompleted =
    tasks.length && tasks.every((task) => task.checked === true);

  return (
    <>
      <div className="stage-title">
        <div>
          <div>{order}</div>
          <h3>{name}</h3>
        </div>
        <div style={allTasksCompleted ? {} : { display: "none" }}>&#10004;</div>
      </div>
      <ul className="task-list">
        {tasks.length ? (
          tasks.map((task) => (
            <li key={task.id}>
              <Task {...task} setChecked={onSetChecked} />
            </li>
          ))
        ) : (
          <i>What are you waiting for? Add new tasks!</i>
        )}
      </ul>
    </>
  );
};

export { Stage };
