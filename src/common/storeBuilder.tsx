import React, {
  ReducerState,
  useContext,
  createContext,
  Dispatch,
  FunctionComponent,
  ReactNode,
  Reducer,
  useReducer,
} from "react";
type DispatchAction<S extends Object> = (
  arctionArgs: any
) => (preState: S) => S;
export type DispatchActions<S extends Object> = {
  [k: string]: DispatchAction<S>;
};
type Action<S extends object, A extends Object> = {
  type: keyof A;
} & Partial<S> & { [k: string]: any };

type ProviderValue<S extends object, A extends Object> = [
  ReducerState<Reducer<S, Action<S, A>>>,
  Dispatch<Action<S, A>>
];

export const buildStore = <
  InitialState extends object,
  ActionList extends DispatchActions<InitialState>
>(
  initialState: InitialState,
  actions: ActionList,
  storeName?: string
): {
  Provider: FunctionComponent<{ children: ReactNode }>;
  useStore: () => ProviderValue<InitialState, ActionList>;
} => {
  const initialProviderValue: ProviderValue<InitialState, ActionList> = [
    initialState,
    () => {},
  ];
  const Context =
    createContext<ProviderValue<InitialState, ActionList>>(
      initialProviderValue
    );
  Context.displayName = storeName || "GenrtalStore";
  const Provider: FunctionComponent<{ children: ReactNode }> = ({
    children,
  }) => {
    const reducer: Reducer<InitialState, Action<InitialState, ActionList>> = (
      preState,
      actionArgs
    ) => {
      const { type } = actionArgs;
      if (!type || !actions[type]) {
        console.error(`Can not find action type ${type} no change on state`);
        return preState;
      }
      return actions[type](actionArgs)(preState);
    };
    const value = useReducer(reducer, initialState, undefined);
    return <Context.Provider {...{ children, value }} />;
  };
  const useStore = () =>
    useContext<ProviderValue<InitialState, ActionList>>(Context);
  return { Provider, useStore };
};
