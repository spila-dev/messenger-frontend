import { useMainContext } from "hooks/useMainContext";

import ContactListItem from "components/others/ContactListItem";
import CustomBox from "components/generals/boxes/CustomBox";
import CustomButton from "components/generals/inputs/CustomButton";
import CustomFlexBox from "components/generals/boxes/CustomFlexBox";
import DialogTemplate from "components/dialogs/DialogTemplate";
import H5 from "components/generals/typographies/H5";

import { DIALOG_NAMES } from "variables/otherVariables/helpers";
import { commonActions } from "functions/utilities/commonActions";

const ContactsTitle = () => (
  <>
    <CustomFlexBox jc="center" ai="center">
      <H5>Contacts</H5>
    </CustomFlexBox>
  </>
);

const ContactsActions = ({ onClose, onAddContactClick }) => (
  <>
    <CustomFlexBox
      sx={{ width: "100%" }}
      jc="space-between"
      gap={2}
      ai="center"
    >
      <CustomBox>
        <CustomButton
          variant="text"
          style={{ fontWeight: "bold" }}
          onClick={onAddContactClick}
        >
          Add Contact
        </CustomButton>
      </CustomBox>
      <CustomBox>
        <CustomButton
          variant="text"
          style={{ fontWeight: "bold" }}
          onClick={onClose}
        >
          Close
        </CustomButton>
      </CustomBox>
    </CustomFlexBox>
  </>
);
const ContactsDialog = ({ onDialogClose }) => {
  const {
    hooksOutput: { dispatch },
    state: {
      global: { dialogState },
      user,
    },
  } = useMainContext();

  const handleAddContactClick = () => {
    dispatch(commonActions.closeDialog(DIALOG_NAMES.CONTACTS));
    dispatch(commonActions.openDialog(DIALOG_NAMES.ADD_NEW_CONTACT));
  };

  const handleClose = () => {
    onDialogClose("contacts");
  };

  console.log(user.contacts);
  const mainContent = user.contacts?.map((contact, index) => (
    <ContactListItem
      key={index}
      name={`${contact.firstName} ${contact.lastName}`}
    />
  ));

  return (
    <DialogTemplate
      titleContent={<ContactsTitle />}
      mainContent={mainContent}
      actionContent={
        <ContactsActions
          onClose={handleClose}
          onAddContactClick={handleAddContactClick}
        />
      }
      open={dialogState.contacts.open}
      paperStyle={{ height: "90vh" }}
      onClose={handleClose}
    />
  );
};

export default ContactsDialog;
