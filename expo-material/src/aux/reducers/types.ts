import { BirdActions, BirdType } from "./bird";
import { CarActions, CarType } from "./car";
import { DarkModeActions } from "./darkMode";

export type InitialStateType = {
  cars: CarType[];
  birds: BirdType[];
  darkMode: boolean;
};

export type Action = BirdActions | DarkModeActions | CarActions;

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
