export type TaskType = {
  id: string;
  name: string;
  checked: boolean;
};

export const STAGE_NAMES = {
  FOUNDATION: "foundation",
  DISCOVERY: "discovery",
  DELIVERY: "delivery",
} as const;
export type StageName = (typeof STAGE_NAMES)[keyof typeof STAGE_NAMES];

export type StageType = {
  order: number;
  name: StageName;
  tasks: TaskType[];
};
