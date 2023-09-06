import React, {
  PropsWithChildren,
  createContext,
  useReducer,
} from "react";
import { initialSettings, settingsReducer } from "../reducers/settings";
import { birdReducer } from "../reducers/bird";
import { Action, InitialStateType } from "../reducers/types";
import { carReducer } from "../reducers/car";

const initialState: InitialStateType = {
  cars: [],
  birds: [],
  settings: initialSettings,
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});


const mainReducer = (state: InitialStateType, action: Action) => ({
  cars: carReducer(state.cars, action),
  birds: birdReducer(state.birds, action),
  settings: settingsReducer(state.settings, action),
});

const AppProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppProvider };
