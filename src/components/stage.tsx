import { Task } from "./task";
import { type StageName, type StageType } from "./startup-progress.types";
import "./stage.css";

type Props = StageType & {
  setChecked: (id: string, cheched: boolean, stageName: StageName) => void;
};

const Stage = ({ order, name, tasks, unlocked, setChecked }: Props) => {
  const onSetChecked = (id: string, checked: boolean) => {
    setChecked(id, checked, name);
  };

  const allTasksCompleted =
    tasks.length && tasks.every((task) => task.checked === true);

  return (
    <div style={unlocked ? {} : { opacity: 0.5 }}>
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
              <Task {...task} setChecked={onSetChecked} unlocked={unlocked} />
            </li>
          ))
        ) : (
          <i>What are you waiting for? Add new tasks!</i>
        )}
      </ul>
    </div>
  );
};

export { Stage };
