import { User } from "./user";

export interface UserDto {
  success: boolean;
  data: User[];
}
