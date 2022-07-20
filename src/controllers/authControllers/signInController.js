import { loadingAction, userAction } from "actions/userActions";
import { viewModeAction } from "actions/globalActions";

import { signInApi } from "apis/authenticationApis";

import { persistentStorage } from "classes/PersistentStorage";

import { getInitialState } from "variables/initials/initialStates/initialStates";
import {
  INITIAL_VIEW_MODE,
  PERSISTENT_STORAGE_KEYS,
} from "variables/initials/initialValues/initialValues";

const signInController = () => {
  return async (dispatch, getState = getInitialState) => {
    const {
      tempState: { phoneNumber, countryCode, countryName },
      globalState: { loadingState },
    } = getState();

    try {
      dispatch(
        loadingAction({ loadingState: { ...loadingState, loading: true } })
      );

      const response = await signInApi.sendRequest({
        phoneNumber,
        countryCode,
        countryName,
      });

      const verifyToken = response.data.user.verifyToken;

      persistentStorage.setItem(
        PERSISTENT_STORAGE_KEYS.VERIFY_TOKEN,
        verifyToken
      );

      dispatch(
        userAction({
          ...response.data.user,
        })
      );

      dispatch(viewModeAction({ viewMode: INITIAL_VIEW_MODE.VERIFY_SIGN_IN }));

      return response;
    } catch (error) {
      console.log("signInController catch", error);
    } finally {
      dispatch(
        loadingAction({ loadingState: { ...loadingState, loading: false } })
      );
    }
  };
};

export { signInController };