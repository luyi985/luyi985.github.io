import React, {
  ProviderProps,
  ReducerAction,
  ReducerState,
  useContext,
} from "react";
import {
  createContext,
  Dispatch,
  FunctionComponent,
  ReactNode,
  Reducer,
  useReducer,
} from "react";
import configData from "./config";
export type Config = {
  isOpenToHire: boolean;
  isToShutDown: boolean;
};
type ConfigAction = { type: string } & Partial<Config>;
type ProviderValue = [
  ReducerState<Reducer<Config, ConfigAction>>,
  Dispatch<Reducer<Config, ConfigAction>>
];
const Context = createContext<ProviderValue>([configData, () => {}]);
Context.displayName = "ConfigContext";

const ConfigProvider: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const reducer: Reducer<Config, any> = (state, action) => {
    const { type, ...toUpdate } = action;
    if (type === "update") {
      return { ...state, ...toUpdate };
    }

    return state;
  };
  return (
    <Context.Provider value={useReducer(reducer, configData, undefined)}>
      {children}
    </Context.Provider>
  );
};

const useConfigStore = (): ProviderValue => useContext(Context);
const GH_GRAPHQL = "https://api.github.com/graphql";
export { ConfigProvider, useConfigStore, GH_GRAPHQL };
