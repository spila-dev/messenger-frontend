import { userAction } from "actions/userActions";

import { getContactsApi } from "apis/cellphoneApis";

const getContactsController = () => {
  return async (dispatch, getState) => {
    try {
      const result = await getContactsApi.sendRequest();

      dispatch(userAction({ contacts: result.data.contacts }));
    } catch (error) {}
  };
};

export { getContactsController };