import { actionHandler } from "classes/ActionHandler";

import { GLOBAL_ACTION_TYPES } from "store/global/types";

const appDrawerOpenChange = (payload) =>
  actionHandler(GLOBAL_ACTION_TYPES.APP_DRAWER_OPEN_CHANGE, payload);

const appProgressionChange = (payload) =>
  actionHandler(GLOBAL_ACTION_TYPES.APP_PROGRESSION_CHANGE, payload);

const dialogOpenChange = (payload) =>
  actionHandler(GLOBAL_ACTION_TYPES.DIALOG_OPEN_STATE_CHANGE, payload);

const globalLoadingOpenChange = (payload) =>
  actionHandler(GLOBAL_ACTION_TYPES.GLOBAL_LOADING_OPEN_CHANGE, payload);

const onlineStatusChange = (payload) =>
  actionHandler(GLOBAL_ACTION_TYPES.ONLINE_STATUS_CHANGE, payload);

const viewModeChange = (payload) =>
  actionHandler(GLOBAL_ACTION_TYPES.VIEW_MODE_ONCHANGE, payload);

const resetGlobalState = () =>
  actionHandler(GLOBAL_ACTION_TYPES.RESET_GLOBAL_STATE);

const changeInitialSetupStatus = (payload) =>
  actionHandler(GLOBAL_ACTION_TYPES.CHANGE_INITIAL_SETUP_STATUS, payload);

const globalActions = {
  appDrawerOpenChange,
  appProgressionChange,
  dialogOpenChange,
  globalLoadingOpenChange,
  onlineStatusChange,
  resetGlobalState,
  viewModeChange,
  changeInitialSetupStatus,
};

export { globalActions };