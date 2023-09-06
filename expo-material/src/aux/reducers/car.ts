import { Action, ActionMap } from "./types";

export enum Types {
  Create = "CREATE_CAR",
  Delete = "DELETE_CAR",
  SetCars = "SET_CARS",
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
  [Types.SetCars]: {
    cars: CarType[];
  };
};

export type CarActions = ActionMap<CarPayload>[keyof ActionMap<CarPayload>];

export const carReducer = (state: CarType[], action: Action) => {
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
      return [...state.filter((car) => car.id !== action.payload.id)];
    case Types.SetCars:
      return [...action.payload.cars];
    default:
      return state;
  }
};
