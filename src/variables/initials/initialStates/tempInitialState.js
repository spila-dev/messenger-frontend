const defaultTempState = () => ({
  countryCode: "",
  countryName: "",
  firstName: "",
  lastName: "",
  messages: [],
  phoneNumber: "",
  selectedContact: {},
  selectedCountry: null,
  tempUserState: {},
  verificationCode: "",
  welcome: {
    message: "",
  },
});

const tempInitialState = defaultTempState();

export { defaultTempState, tempInitialState };
