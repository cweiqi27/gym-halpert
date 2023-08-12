import type { Document } from "mongoose";
import { Schema, model } from "mongoose";
import { UserRole, UserRoleArr } from "@/types/typeEnums.types";

export interface UserDocument extends Partial<Document> {
  externalId: string;
  role?: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<UserDocument>({
  externalId: { type: String, unique: true, required: true },
  role: { type: String, enum: UserRoleArr, default: "USER" },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

const User = model<UserDocument>("User", userSchema);

export default User;
