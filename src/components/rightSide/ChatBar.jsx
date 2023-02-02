import { Box } from "src/components/general/box";

import { Icons } from "src/components/other/Icons";
import IconButton from "src/components/general/other/IconButton";
import Typography from "src/components/general/typography/Typography";

const ChatBar = ({
  contactName,
  // onChatBarClick,
  onMessageContainerCloseClick,
}) => {
  return (
    <>
      <Box.Paper
        style={{
          alignItems: "center",
          borderRadius: 0,
          display: "flex",
          height: 50,
          justifyContent: "space-between",
          padding: 5,
        }}
        // onClick={onChatBarClick}
      >
        <Box.Div>
          <IconButton onClick={onMessageContainerCloseClick}>
            <Icons.Close.Icon />
          </IconButton>
        </Box.Div>

        <Box.Flex ai="center">
          <Typography
            style={{
              fontSize: 18,
              fontWeight: "500",
            }}
          >
            {contactName}
          </Typography>
        </Box.Flex>

        <Box.Div>
          <IconButton>
            <Icons.MoreVertical.Icon />
          </IconButton>
        </Box.Div>
      </Box.Paper>
    </>
  );
};

export default ChatBar;
