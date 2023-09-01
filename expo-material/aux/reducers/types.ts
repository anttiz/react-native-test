import { BirdActions, BirdType } from "./bird";
import { DarkModeActions } from "./darkMode";

export type InitialStateType = {
  birds: BirdType[];
  darkMode: boolean;
};

export type Action = BirdActions | DarkModeActions;

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      }
};
