//
// Purpose:
// ========
//
// Guards against creating multiple instances of assets intended to be singletons.
//
// Import and use the following constructor:
//
// constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
//   throwIfAlreadyLoaded(parentModule, 'CoreModule');
// } 
//

export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
  }
}
