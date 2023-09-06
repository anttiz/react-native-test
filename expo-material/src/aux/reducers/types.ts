import { BirdActions, BirdType } from "./bird";
import { CarActions, CarType } from "./car";
import { Settings, SettingsActions } from "./settings";

export type InitialStateType = {
  cars: CarType[];
  birds: BirdType[];
  settings: Settings;
};

export type Action = BirdActions | SettingsActions | CarActions;

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};
