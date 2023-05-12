export const SetTypeArr = ["WARMUP", "NORMAL", "DROP", "1RM"] as const;
export type SetType = (typeof SetTypeArr)[number];

export interface SetDocument extends Partial<Document> {
  type: SetType;
  weight?: number;
  reps?: number;
}
