import { Stage } from "./stage";
import { type StageName, type StageType } from "./startup-progress.types";

type Props = {
  stages: StageType[];
  setChecked: (id: string, cheched: boolean, stageName: StageName) => void;
};

const StartupProgress = ({ stages, setChecked }: Props) => {
  return (
    <section>
      <h2>My startup progress</h2>
      {stages.map((stage) => (
        <Stage {...stage} key={stage.order} setChecked={setChecked} />
      ))}
    </section>
  );
};

export { StartupProgress };
