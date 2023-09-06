import { Action, ActionMap } from "./types";

export enum Types {
  Create = "CREATE_BIRD",
  Delete = "DELETE_BIRD",
  SetBirds = "SET_BIRDS",
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
  [Types.SetBirds]: {
    birds: BirdType[];
  };
};

export type BirdActions = ActionMap<BirdPayload>[keyof ActionMap<BirdPayload>];

export const birdReducer = (state: BirdType[], action: Action) => {
  switch (action.type) {
    case Types.Create:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
        },
      ];
    case Types.Delete:
      return [...state.filter((bird) => bird.id !== action.payload.id)];
    case Types.SetBirds:
      return [...action.payload.birds];
    default:
      return state;
  }
};
