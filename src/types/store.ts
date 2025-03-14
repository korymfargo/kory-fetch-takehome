import { Dog } from "@types";

export interface UserSlice {
  loggedIn: boolean;
  name?: string;
  email?: string;
}

export interface DogsSlice {
  dogIds: Set<string>;
  dogs: Array<Dog>;
}