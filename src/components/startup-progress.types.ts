export type TaskType = {
  name: string;
  checked: boolean;
};

export const STAGE_NAMES = {
  FOUNDATION: "foundation",
  DISCOVERY: "discovery",
  DELIVERY: "delivery",
} as const;
type StageName = (typeof STAGE_NAMES)[keyof typeof STAGE_NAMES];

export type StageType = {
  id: number;
  name: StageName;
  tasks: TaskType[];
};
