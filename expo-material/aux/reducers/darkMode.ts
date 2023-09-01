import { Action, ActionMap } from "./types";

export enum Types {
  Toggle = "TOGGLE_DARK_MODE"
}

// ShoppingCart

type DarkModePayload = {
  [Types.Toggle]: undefined;
};

export type DarkModeActions = ActionMap<
  DarkModePayload
>[keyof ActionMap<DarkModePayload>];

export const darkModeReducer = (
  state: boolean,
  action: Action
) => {
  switch (action.type) {
    case Types.Toggle:
      return !state;
    default:
      return state;
  }
};
