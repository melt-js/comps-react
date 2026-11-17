import { exposeLib } from 'hel-lib-proxy';

/*
|--------------------------------------------------------------------------
|
| 对应 package.json/appGroupName
|
|--------------------------------------------------------------------------
*/

const LIB_NAME = 'comps-react';

var lib = exposeLib(LIB_NAME);
var HelloRemoteReactComp = lib.HelloRemoteReactComp;
var HelloButton = lib.HelloButton;
var comps = lib;

export { HelloButton, HelloRemoteReactComp, comps, lib as default, lib };
