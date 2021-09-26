import { buildStore } from "@/common/storeBuilder";

import configData from "./config";
export type Config = {
  isOpenToHire: boolean;
  isToShutDown: boolean;
};

const actions = {
  update: (args: Partial<Config>) => (preState: Config) => {
    return {
      ...preState,
      ...args,
    };
  },
};

const ConfigStore = buildStore<typeof configData, typeof actions>(
  configData,
  actions,
  "ConfigStore"
);

const { Provider: ConfigProvider, useStore: useConfigStore } = ConfigStore;

const GH_GRAPHQL = "https://api.github.com/graphql";
export { ConfigProvider, useConfigStore, GH_GRAPHQL };
