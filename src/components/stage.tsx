import { Task } from "./task";
import { StageType } from "./types";

type Props = StageType;

const Stage = ({ id, name, tasks }: Props) => {
  return (
    <>
      <div>{id}</div>
      <h3>{name}</h3>
      {tasks.map((task) => (
        <Task {...task} />
      ))}
    </>
  );
};

export { Stage };
