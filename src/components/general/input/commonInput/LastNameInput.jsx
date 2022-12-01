import CustomTextInput from "components/general/input/CustomTextInput";
import withInputValidator from "hoc/withInputValidator";

import { variables } from "variables";

const LastNameInput = ({ inputValue, onInputChange, required = true }) => {
  return (
    <CustomTextInput
      id="lastName"
      label="Last Name"
      name={variables.other.helper.ELEMENT_NAMES.LAST_NAME}
      onChange={onInputChange}
      required={required}
      value={inputValue}
    />
  );
};

const LastName = {
  Native: LastNameInput,
  WithValidator: withInputValidator(
    LastNameInput,
    variables.other.helper.VALIDATION_KEYS.lastName
  ),
};

export default LastName;