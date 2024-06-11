/* eslint-disable */
import { ɵcreateInjector } from '@angular/core';
import { SaffronLoadComponentModel } from '../saffron-microfront-public-api';

type Scope = unknown;
type Factory = () => any;

type Container = {
  init(shareScope: Scope): void;
  get(module: string): Factory;
};

declare const __webpack_init_sharing__: (shareScope: string) => Promise<void>;
declare const __webpack_share_scopes__: { default: Scope };

const moduleMap = {};

function loadRemoteEntry(remoteEntry: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    if ((moduleMap as any)[remoteEntry]) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = remoteEntry;

    script.onerror = reject;

    script.onload = () => {
      (moduleMap as any)[remoteEntry] = true;
      resolve(); // window is the global namespace
    };

    document.body.append(script);
  });
}

async function lookupExposedModule<T>(
  remoteName: string,
  exposedModule: string
): Promise<T> {
  // Initializes the share scope. This fills it with known provided modules from this build and all remotes
  await __webpack_init_sharing__('default');
  const container = (window as any)[remoteName] as Container; // or get the container somewhere else
  // Initialize the container, it may provide shared modules

  await container.init(__webpack_share_scopes__.default);
  const factory = await container.get(exposedModule);
  const Module = factory();
  return Module as T;
}

export type SaffronLoadRemoteModuleOptions = {
  remoteEntry: string;
  remoteName: string;
  exposedModule: string;
};

export async function SaffronLoadRemoteModule(
  options: SaffronLoadRemoteModuleOptions
): Promise<any> {
  await loadRemoteEntry(options.remoteEntry);
  return await lookupExposedModule<any>(
    options.remoteName,
    options.exposedModule
  );
}

export function SaffronLoadRemoteComponent(loadComponentModel: SaffronLoadComponentModel): void {
  SaffronLoadRemoteModule({
    remoteEntry: loadComponentModel.remoteEntry,
    remoteName: loadComponentModel.remoteName,
    exposedModule: loadComponentModel.exposedModule,
  }).then((federated) => {
    const type = federated[loadComponentModel.exposedModule].ɵmod.exports.find(
      (e: any) => e.name === loadComponentModel.componentName
    );

    const { instance } =
      loadComponentModel.componentContainerRef.createComponent(type, {
        injector: ɵcreateInjector(
          federated[loadComponentModel.exposedModule],
          loadComponentModel.injector
        ),
      });
    loadComponentModel.chRef.detectChanges();
  });
}
