import AddNewContact from "src/containers/dialog/AddNewContact";
import Contacts from "src/containers/dialog/Contacts";
import Logout from "src/containers/dialog/Logout";
import Settings from "src/containers/dialog/Settings";

import { useDispatch, useSelector } from "src/hooks/useThunkReducer";

import { commonActions } from "src/store/commonActions";
import { stateStatics } from "src/store/stateStatics";

const Dialog = () => {
  const dispatch = useDispatch();
  const state = useSelector();

  const handleDialogClose = (dialogName) => {
    dispatch(commonActions.closeDialog(dialogName));
  };

  return (
    <>
      {state.global.initialSetupDetails.status ===
        stateStatics.INITIAL_SETUP_STATUS.DONE &&
        [AddNewContact, Contacts, Logout, Settings].map((Component, i) => (
          <Component key={i} onDialogClose={handleDialogClose} />
        ))}
    </>
  );
};

export default Dialog;
