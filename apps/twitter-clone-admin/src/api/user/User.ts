import { JsonValue } from "type-fest";
import { Like } from "../like/Like";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  bio: string | null;
  avatarUrl: string | null;
  likes?: Array<Like>;
};