import type { Document } from "mongoose";
export const UserRoleArr = ["ADMIN", "USER"] as const;
export type UserRole = (typeof UserRoleArr)[number];

export interface User {
  externalId: string;
  role?: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserDocument extends User, Partial<Document> {}
