import { useEffect } from "react";

import { Box } from "~/components";
import ChatBar from "~/containers/Messenger/RightSide/ChatBar";
import MessageInput from "~/containers/Messenger/RightSide/MessageInput";
import MessageList from "~/containers/Messenger/RightSide/MessageList";
import {
  useEmitter,
  useNewPrivateChatMessage,
  useSetPrivateChats,
} from "~/hooks";
import { useMessageStore, useUserStore } from "~/store";

const RightSide = () => {
  const messageStore = useMessageStore();
  useNewPrivateChatMessage();
  useSetPrivateChats();
  const { handler: joinHandler } = useEmitter("join");
  const { handler: getOnlineClientsHandler } = useEmitter("getOnlineClients");
  const userStore = useUserStore();

  useEffect(() => {
    joinHandler.emitFull({}, () => {
      getOnlineClientsHandler.emitFull({});
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userStore.currentUserData.userId]);

  return (
    <Box.Grid
      container
      sx={{
        height: "100%",
      }}
      item
      lg={9}
      md={8}
    >
      {messageStore.selectedChatInfo.userId && (
        <Box.Flex
          col
          sx={{
            height: "100%",
            width: "100%",
          }}
          jc="space-between"
          ai="center"
        >
          <Box.Div
            style={{
              width: "100%",
            }}
          >
            <ChatBar />
          </Box.Div>

          <MessageList />

          <Box.Div
            style={{
              width: "100%",
            }}
          >
            <MessageInput />
          </Box.Div>
        </Box.Flex>
      )}
    </Box.Grid>
  );
};

export default RightSide;
