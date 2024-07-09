import { InputJsonValue } from "../../types";
import { LikeUpdateManyWithoutUsersInput } from "./LikeUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  bio?: string | null;
  avatarUrl?: string | null;
  likes?: LikeUpdateManyWithoutUsersInput;
};
