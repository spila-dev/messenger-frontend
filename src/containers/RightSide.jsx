import { useEffect } from "react";

import { eventManager } from "utility-store/src/classes/EventManager";
import { arrayUtilities } from "utility-store/src/classes/ArrayUtilities";

import { actions } from "actions/actions";

import { appOptions } from "classes/AppOptions";

import { commonJobsHandler } from "classes/CommonJobsHandler";

import ChatBar from "components/rightSide/ChatBar";
import CustomBox from "components/generals/boxes/CustomBox";
import CustomFlexBox from "components/generals/boxes/CustomFlexBox";
import GridContainer from "components/generals/boxes/GridContainer";
import MessageInput from "components/rightSide/MessageInput";

import { controllers } from "controllers";

import { useMainContext } from "hooks/useMainContext";

const RightSideContainer = () => {
  const {
    hooksOutput: { dispatch },
    // others: { getState },
    state,
  } = useMainContext();

  useEffect(() => {
    const eventName = appOptions.getOptions().EVENT_EMITTER_EVENTS.MESSAGE_SENT;
    eventManager.addListener(
      eventName,
      commonJobsHandler.resetMessageInputText
    );

    return () => {};
  }, []);

  useEffect(() => {
    if (arrayUtilities.arrayLength(state.user.chatInfo)) {
      dispatch(controllers.getPrivateChats());
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.user.chatInfo]);

  const handleInputChange = ({ target: { value } }) => {
    dispatch(actions.messageInputOnChange({ messageInputTextValue: value }));
  };

  const handleSendMessage = async () => {
    dispatch(controllers.sendPrivateMessage());
  };

  const handleMessageContainerCloseClick = () => {
    dispatch(actions.selectedUserForPrivateChat({ selectedContactId: "" }));
  };

  return (
    <GridContainer
      sx={{ backgroundColor: "tomato", height: "100%" }}
      item
      lg={9}
      md={8}
    >
      {state.temp.selectedUserForPrivateChat.userId && (
        <CustomFlexBox
          col
          sx={{ width: "100%", height: "100%" }}
          jc="space-between"
          ai="center"
        >
          <CustomBox sx={{ height: "50px", width: "100%" }}>
            <ChatBar
              onMessageContainerCloseClick={handleMessageContainerCloseClick}
              chatName={`${state.temp.selectedUserForPrivateChat.firstName} ${state.temp.selectedUserForPrivateChat.lastName}`}
            />
          </CustomBox>

          <CustomBox sx={{ height: "100%", width: "100%" }}>
            {/* <MessageList
              messages={chat?.messages || []}
              user={user}
            /> */}
          </CustomBox>

          <CustomBox sx={{ width: "100%" }}>
            <MessageInput
              messageInputTextValue={state.temp.messageInputTextValue}
              onSendMessage={handleSendMessage}
              onInputChange={handleInputChange}
            />
          </CustomBox>
        </CustomFlexBox>
      )}
    </GridContainer>
  );
};

export default RightSideContainer;