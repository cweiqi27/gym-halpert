import { Schema, model } from "mongoose";
import type { UserDocument } from "shared-types";
import { UserRoleArr } from "shared-types";

const userSchema = new Schema<UserDocument>({
  externalId: { type: String, unique: true, required: true },
  role: { type: String, enum: UserRoleArr, default: "USER" },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

const User = model<UserDocument>("User", userSchema);

export default User;
