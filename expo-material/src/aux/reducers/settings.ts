import { Action, ActionMap } from "./types";

export enum Types {
  ToggleDarkMode = "TOGGLE_DARK_MODE"
}

export type Settings = {
  darkMode: boolean;
}

export const initialSettings: Settings = {
  darkMode: true
};

type SettingsPayload = {
  [Types.ToggleDarkMode]: boolean;
};

export type SettingsActions = ActionMap<
  SettingsPayload
>[keyof ActionMap<SettingsPayload>];

export const settingsReducer = (
  state: Settings,
  action: Action
) => {
  switch (action.type) {
    case Types.ToggleDarkMode:
      return {
        ...state,
        darkMode: action.payload
      };
    default:
      return state;
  }
};
