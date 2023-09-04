import { ContactItem } from "utility-store/lib/types";

import { Template } from "~/components";
import { useContextMenu } from "~/hooks";
import { useGlobalStore, useMessageStore, useUserStore } from "~/store";
import {
  ContextMenuList,
  DialogName,
  ExtendedOnContextMenu,
  UserItem,
} from "~/types";

import Actions from "./Actions";
import Content from "./Content";
import Title from "./Title";

const Contacts = () => {
  const globalStore = useGlobalStore();
  const messageStore = useMessageStore();
  const userStore = useUserStore();

  const createContextMenuList = ({
    isBlocked,
  }: Partial<UserItem> = {}): ContextMenuList => [
    {
      text: "Edit Contact",
      handler: onContextMenuHandler("editContactWithCellphone"),
    },
    {
      text: "Remove Contact",
      handler: onContextMenuHandler("removeContact"),
    },
    {
      text: `${isBlocked ? "Remove Block" : "Block Contact"}`,
      handler: onContextMenuHandler("blockUser"),
    },
  ];

  const onContextMenuHandler = (dn: DialogName) => () => {
    globalStore.closeContextMenu();
    globalStore.closeDialog("contacts");
    globalStore.openDialog(dn);
  };

  const { onContextMenu } = useContextMenu(createContextMenuList());

  const handleAddContactClick = () => {
    globalStore.closeDialog("contacts");
    globalStore.openDialog("addContactWithCellphone");
  };

  const handleCloseContactDialog = () => {
    globalStore.closeDialog("contacts");
  };

  const handleContactItemClicked = (contact: ContactItem) => {
    handleCloseContactDialog();
    messageStore.updateSelectedChatInfo({
      userId: contact.userId,
      chatId: "",
    });
  };

  const handleContextMenu: ExtendedOnContextMenu<UserItem> = (event, u) => {
    userStore.setSelectedContactFromContext(u);
    onContextMenu(event, createContextMenuList(u));
  };

  return (
    <Template.Dialog
      title={<Title />}
      content={
        <Content
          contacts={userStore.users.filter((i) => i.isContact)}
          onContactItemClicked={handleContactItemClicked}
          onContextMenu={handleContextMenu}
        />
      }
      actions={
        <Actions
          onClose={handleCloseContactDialog}
          onAddContactClick={handleAddContactClick}
        />
      }
      open={globalStore.dialogState.contacts.open}
      paperStyle={{
        height: "90vh",
      }}
      onClose={handleCloseContactDialog}
    />
  );
};

export default Contacts;