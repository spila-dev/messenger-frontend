import Box from "~/components/general/box";

interface Props {
  fullName: string;
}

const RemoveContactContent: React.FC<Props> = ({ fullName }) => (
  <>
    <Box.Div style={{ textAlign: "center", fontSize: 18 }}>
      <Box.Span>Are you sure you want to</Box.Span>{" "}
      <Box.Span
        style={{
          fontWeight: 600,
        }}
      >
        remove
      </Box.Span>{" "}
      <Box.Span>user</Box.Span>{" "}
      <Box.Span
        style={{
          fontWeight: 600,
        }}
      >
        {fullName}{" "}
      </Box.Span>
      <Box.Span>from your contacts?</Box.Span>
    </Box.Div>
  </>
);

export default RemoveContactContent;
