import { appConfigs } from "~/classes/AppConfigs";
import { GlobalState } from "~/types";

export const defaultDialogState = {
  open: false,
  //TODO: read default value from mui
  props: {
    zIndex: 1300,
  },
};

export const initialState: GlobalState = {
  contextMenu: {
    list: [],
    position: null,
  },
  dialogState: {
    addContact: defaultDialogState,
    addServer: defaultDialogState,
    blockUser: defaultDialogState,
    contacts: defaultDialogState,
    editBio: defaultDialogState,
    editContact: defaultDialogState,
    editContactWithCellphone: defaultDialogState,
    editFullName: defaultDialogState,
    editProfile: defaultDialogState,
    editUsername: defaultDialogState,
    serverSetup: defaultDialogState,
    logout: defaultDialogState,
    removeContact: defaultDialogState,
    servers: defaultDialogState,
    settings: defaultDialogState,
    userInfo: defaultDialogState,
  },
  drawer: {
    anchor: appConfigs.getConfigs().ui.drawerDefaultAnchor,
    open: false,
  },
  isOnline: false,
  loading: {
    color: "wheat",
    open: false,
    progressColor: "inherit",
    size: 80,
    speedMultiplier: 1,
    type: "FULL_PAGE",
  },
};