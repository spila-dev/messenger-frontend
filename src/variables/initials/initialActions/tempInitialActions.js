import { initialCountry } from "variables/initials/initialValues/initialValues";
import { initialStates } from "variables/initials/initialStates/initialStates";

const {
  tempState: { messageInputText, messages, tempUserState, verificationCode },
} = initialStates;

const selectedContactIdInitialAction = {
  payload: {
    selectedContactId: "",
  },
  type: "CONTACT_SELECTED",
};

const messageInputInitialAction = {
  payload: {
    messageInputText,
  },
  type: "MESSAGE_INPUT_ONCHANGE",
};

const setMessagesInitialAction = {
  payload: {
    messages,
  },
  type: "SET_MESSAGES",
};

const countryNameInitialAction = {
  payload: {
    countryName: tempUserState.countryName,
  },
  type: "COUNTRY_NAME_ONCHANGE",
};

const countryCodeInitialAction = {
  payload: {
    countryCode: tempUserState.countryCode,
  },
  type: "COUNTRY_CODE_ONCHANGE",
};

const firstNameInitialAction = {
  payload: {
    firstName: tempUserState.firstName,
  },
  type: "FIRST_NAME_ONCHANGE",
};
const lastNameInitialAction = {
  payload: {
    lastName: tempUserState.lastName,
  },
  type: "LAST_NAME_ONCHANGE",
};

const phoneNumberInitialAction = {
  payload: {
    phoneNumber: tempUserState.phoneNumber,
  },
  type: "PHONE_NUMBER_ONCHANGE",
};

const verificationCodeInitialAction = {
  payload: {
    verificationCode,
  },
  type: "VERIFICATION_CODE_ONCHANGE",
};

const selectedCountryInitialAction = {
  payload: {
    selectedCountry: initialCountry,
  },
  type: "SELECTED_COUNTRY_ONCHANGE",
};

const resetTempStateInitialAction = {
  type: "RESET_TEMP_STATE",
};

const tempInitialActions = {
  countryCodeInitialAction,
  countryNameInitialAction,
  firstNameInitialAction,
  lastNameInitialAction,
  messageInputInitialAction,
  phoneNumberInitialAction,
  resetTempStateInitialAction,
  selectedContactIdInitialAction,
  selectedCountryInitialAction,
  setMessagesInitialAction,
  verificationCodeInitialAction,
};

export { tempInitialActions };
