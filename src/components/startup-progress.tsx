import { Stage } from "./stage";
import { type StageType } from "./startup-progress.types";

type Props = {
  stages: StageType[];
};

const StartupProgress = ({ stages }: Props) => {
  return (
    <>
      <h2>My startup progress</h2>
      {stages.map((stage) => (
        <Stage {...stage} key={stage.id} />
      ))}
    </>
  );
};

export { StartupProgress };