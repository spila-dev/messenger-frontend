import { trier } from "utility-store/src/classes/Trier";

import { actions } from "store/actions";

import { apiManager } from "classes/api/ApiManager";
import { commonTasks } from "classes/CommonTasks";
import { notificationManager } from "classes/NotificationManager";
import { persistentStorage } from "classes/PersistentStorage";
import { userPropsUtilities } from "classes/UserPropsUtilities";

import { controllers } from "controllers";

import { utilities } from "utilities";

import { extractedDispatchAsync } from "hooks/useThunkReducer";

import { store } from "store/store";
import { commonActions } from "store/commonActions";

import { variables } from "variables";

const saveTokenIntoPersistentStorage = (token) =>
  persistentStorage.setItem(persistentStorage.storageKeys.TOKEN, token);

const printTokenNotFound = () =>
  notificationManager.submitErrorNotification(
    variables.notification.error.VERIFY_TOKEN_NOT_FOUND
  );

const verifySignIn = () => {
  const tryToVerifySignIn = async (verificationCode, dispatch) => {
    const token = persistentStorage.getItem(
      persistentStorage.storageKeys.TOKEN
    );
    if (!token) {
      dispatch(commonActions.changeViewMode.signIn());
      printTokenNotFound();
      return;
    }

    return await apiManager.apis.verifySignIn.sendFullFeaturedRequest(
      {
        verificationCode,
      },
      { token: token }
    );
  };

  const tasksIfUserIsNotNew = (dispatch, user) => {
    persistentStorage.removeItem(persistentStorage.storageKeys.TOKEN);

    const token = user.token;
    delete user.token;
    delete user.newUser;

    saveTokenIntoPersistentStorage(token);

    dispatch(actions.updateAllUserData(user));
    dispatch(commonActions.changeViewMode.messenger());
  };
  const executeIfNoErrorTryToVerifySignIn = (response, dispatch) => {
    dispatch(actions.verificationCodeOnChange({ verificationCode: "" }));
    const { user } = response.data;

    if (user.newUser) {
      dispatch(commonActions.changeViewMode.createNewUser());
    } else {
      tasksIfUserIsNotNew(dispatch, user);
    }
  };

  return async (dispatch, getState = store.initialState) => {
    const {
      auth: { verificationCode },
    } = getState();

    dispatch(commonActions.changeAuthenticationProgress(true));

    (
      await trier(verifySignIn.name).tryAsync(
        tryToVerifySignIn,
        verificationCode,
        dispatch
      )
    )
      .executeIfNoError(executeIfNoErrorTryToVerifySignIn, dispatch)
      .catch(utilities.printCatchError, verifySignIn.name);

    dispatch(commonActions.changeAuthenticationProgress(false));
  };
};

const getUserData = () => {
  const tryToGetUserData = async () => {
    const {
      data: { user },
    } = await apiManager.apis.getUserData.sendFullFeaturedRequest();
    await extractedDispatchAsync(controllers.getAllPrivateChats());

    return { user };
  };
  const executeIfNoError = ({ user }, dispatch) => {
    delete user.token;
    dispatch(actions.updateAllUserData(user));
    dispatch(commonActions.changeViewMode.messenger());
  };

  return async (dispatch) => {
    if (!localStorage.getItem("TOKEN")) {
      return;
    }

    (await trier(getUserData.name).tryAsync(tryToGetUserData))
      .executeIfNoError(executeIfNoError, dispatch)
      .catch(utilities.printCatchError, getUserData.name)
      .finally(() =>
        dispatch(actions.globalLoadingOpenChange({ open: false }))
      );
  };
};

const signIn = () => {
  const tryToSignIn = async ({ countryCode, countryName, phoneNumber }) => {
    return await apiManager.apis.signIn.sendFullFeaturedRequest({
      countryCode,
      countryName,
      phoneNumber,
    });
  };
  const executeIfNoErrorOnTryToSignIn = (response, dispatch) => {
    const { token } = response.data.user;
    persistentStorage.setItem(persistentStorage.storageKeys.TOKEN, token);

    dispatch(commonActions.changeViewMode.verifySignIn());
  };

  return async (dispatch, getState = store.initialState) => {
    const {
      auth: { phoneNumber, countryCode, countryName },
    } = getState();
    dispatch(commonActions.changeAuthenticationProgress(true));

    const response = (
      await trier(signIn.name).tryAsync(tryToSignIn, {
        countryCode,
        countryName,
        phoneNumber,
      })
    )
      .executeIfNoError(executeIfNoErrorOnTryToSignIn, dispatch)
      .catch(utilities.printCatchError, signIn.name)
      .result();

    dispatch(commonActions.changeAuthenticationProgress(false));

    return response;
  };
};

const logout = () => {
  const tryToLogout = async () =>
    await apiManager.apis.logout.sendFullFeaturedRequest();

  return async () => {
    (await trier(logout.name).tryAsync(tryToLogout))
      .catch(utilities.printCatchError, logout.name)
      .executeIfNoError(() => commonTasks.resetEverything());
  };
};

const createNewUser = () => {
  const tryToCreateNewUser = async (firstName, lastName, dispatch) => {
    const token = userPropsUtilities.getTokenFromStorage();
    commonTasks.checkAndExecute(!token, () => {
      dispatch(commonActions.changeViewMode.signIn());
      printTokenNotFound();
    });

    const {
      data: { user },
    } = await apiManager.apis.createNewUser.sendFullFeaturedRequest(
      {
        firstName,
        lastName,
      },
      { token }
    );

    return user;
  };
  const executeIfNoErrorOnTryToCreateNewUser = (user, dispatch) => {
    const token = user.token;
    delete user.token;

    userPropsUtilities.removeTokenFromStorage();
    dispatch(actions.updateAllUserData(user));
    dispatch(commonActions.changeViewMode.messenger());

    saveTokenIntoPersistentStorage(token);
  };

  return async (dispatch, getState = store.initialState) => {
    const {
      auth: { firstName, lastName },
    } = getState();

    dispatch(commonActions.changeAuthenticationProgress(true));

    (
      await trier(createNewUser.name).tryAsync(
        tryToCreateNewUser,
        firstName,
        lastName,
        dispatch
      )
    )
      .executeIfNoError(executeIfNoErrorOnTryToCreateNewUser, dispatch)
      .catch(utilities.printCatchError, createNewUser.name);

    dispatch(commonActions.changeAuthenticationProgress(false));
  };
};

const authControllers = {
  createNewUser,
  getUserData,
  logout,
  signIn,
  verifySignIn,
};

export { authControllers };
