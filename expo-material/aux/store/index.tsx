import React, {
  PropsWithChildren,
  createContext,
  useReducer,
} from "react";
import { darkModeReducer } from "../reducers/darkMode";
import { birdReducer } from "../reducers/bird";
import { Action, InitialStateType } from "../reducers/types";

const initialState: InitialStateType = {
  birds: [],
  darkMode: false,
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});


const mainReducer = (state: InitialStateType, action: Action) => ({
  birds: birdReducer(state.birds, action),
  darkMode: darkModeReducer(state.darkMode, action),
});

const AppProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppProvider };
