import { Action, ActionMap } from "./types";

export enum Types {
  Create = "CREATE_CAR",
  Delete = "DELETE_CAR",
  Add = "ADD_CAR"
}

// Bird

export type CarType = {
  id: string;
  name: string;
};

type CarPayload = {
  [Types.Create]: {
    id: string;
    name: string;
  };
  [Types.Delete]: {
    id: string;
  };
};

export type CarActions = ActionMap<CarPayload>[keyof ActionMap<
  CarPayload
>];

export const carReducer = (
  state: CarType[],
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
