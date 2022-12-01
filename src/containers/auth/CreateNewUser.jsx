import { actions } from "store/actions";

import { stuffStore } from "classes/StuffStore";

import CustomBox from "components/general/box/CustomBox";
import CustomButton from "components/general/input/CustomButton";
import CustomContainer from "components/general/box/CustomContainer";
import CustomFlexBox from "components/general/box/CustomFlexBox";
import CustomIconButton from "components/general/other/CustomIconButton";
import FirstName from "components/general/input/commonInput/FirstNameInput";
import GreyTextParagraph from "components/general/typography/GreyTextParagraph";
import LastName from "components/general/input/commonInput/LastNameInput";

import { controllers } from "controllers";

import { useMainContext } from "hooks/useMainContext";

import { Icons } from "components/other/Icons";
import { commonTasks } from "classes/CommonTasks";

const CreateNewUser = ({ onBackToSignInClick }) => {
  const {
    hooksOutput: { dispatch },
    state,
  } = useMainContext();

  const handleFirstNameInputChange = (e) => {
    dispatch(actions.firstNameOnChange({ firstName: e.target.value }));
  };

  const handleLastNameInputChange = (e) => {
    dispatch(actions.lastNameOnChange({ lastName: e.target.value }));
  };

  const handleCreateNewUserConfirmClick = () => {
    dispatch(controllers.createNewUser());
  };

  const isCreateNewUserConfirmButtonDisabled = () => {
    const firstNameValidateResult =
      commonTasks.validateInputValueLengthByModelMinMaxLength(
        stuffStore.models.firstName,
        state.auth.firstName
      );

    const lastNameValidateResult =
      commonTasks.validateInputValueLengthByModelMinMaxLength(
        stuffStore.models.lastName,
        state.auth.lastName
      );

    return !firstNameValidateResult || !lastNameValidateResult;
  };

  return (
    <CustomContainer mw="xl">
      <CustomBox
        sx={{
          mt: 1,
        }}
      >
        <CustomIconButton onClick={onBackToSignInClick}>
          <Icons.ArrowBack.Icon />
        </CustomIconButton>
      </CustomBox>
      <CustomFlexBox sx={{ marginTop: 8 }} col ai="center">
        <CustomBox>
          <Icons.AccountCircleOutlined.Icon fontSize="large" color="primary" />
        </CustomBox>
        <CustomContainer mw="xs">
          <GreyTextParagraph>
            Please enter this information to complete your account creation.
          </GreyTextParagraph>
          <FirstName.WithValidator
            inputValue={state.auth.firstName}
            onInputChange={handleFirstNameInputChange}
          />
          <LastName.WithValidator
            inputValue={state.auth.lastName}
            onInputChange={handleLastNameInputChange}
          />

          <CustomButton
            loading={state.global.appProgressions.authenticationProgress}
            loadingPosition="end"
            onClick={handleCreateNewUserConfirmClick}
            endIcon={<Icons.Check.Icon />}
            sx={{ mt: 1 }}
            disabled={isCreateNewUserConfirmButtonDisabled()}
          >
            Confirm
          </CustomButton>
        </CustomContainer>
      </CustomFlexBox>
    </CustomContainer>
  );
};

export default CreateNewUser;