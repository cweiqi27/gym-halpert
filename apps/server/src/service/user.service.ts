import User from "@/model/user.model";

export const createUser = async (
  userId: string,
  createdAt: number,
  updatedAt: number
) => {
  try {
    const user = await User.create({
      externalId: userId,
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
    const user = User.updateOne(
      { externalId: userId },
      { $set: { role: role } }
    );
    return user;
  } catch (e: any) {
    throw new Error(e);
  }
};
