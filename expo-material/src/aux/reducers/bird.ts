import { Action, ActionMap } from "./types";

export enum Types {
  Create = "CREATE_BIRD",
  Delete = "DELETE_BIRD",
  Add = "ADD_BIRD"
}

// Bird

export type BirdType = {
  id: string;
  name: string;
};

type BirdPayload = {
  [Types.Create]: {
    id: string;
    name: string;
  };
  [Types.Delete]: {
    id: string;
  };
};

export type BirdActions = ActionMap<BirdPayload>[keyof ActionMap<
  BirdPayload
>];

export const birdReducer = (
  state: BirdType[],
  action: Action
) => {
  switch (action.type) {
    case Types.Create:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
        }
      ];
    case Types.Delete:
      return [...state.filter(product => product.id !== action.payload.id)];
    default:
      return state;
  }
};
