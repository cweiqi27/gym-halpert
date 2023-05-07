import User from "../model/user.model";
import clerk from "@clerk/clerk-sdk-node";

export const createUser = async (
  userInput: string,
  createdAt: number,
  updatedAt: number
) => {
  try {
    const user = await User.create({
      userId: userInput,
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt),
    });
    return user;
  } catch (e: any) {
    throw new Error(e);
  }
};

export const createRole = async (userId: string, role: "ADMIN" | "USER") => {
  try {
    const user = await clerk.users.updateUser(userId, {
      publicMetadata: { role: role },
    });
    return user;
  } catch (e: any) {
    throw new Error(e);
  }
};
