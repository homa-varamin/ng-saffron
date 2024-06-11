import { SaffronLoadRemoteModuleOptions } from '../utils/saffron-federation-utils';

export type SaffronMicrofrontendRoute = SaffronLoadRemoteModuleOptions & {
  displayName: string;
  routePath: string;
  ngModuleName: string;
};
