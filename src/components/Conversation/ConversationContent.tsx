import {conversation} from "./data";
import Message from "./Message";
import Container from "components/Ui/Container";

function ConversationContent() {
  return (
    <Container sx={{position: "absolute", top: "0", height: "88%", width: "100%", padding: "20px"}}>
      {conversation.map(({userId, message, date}, index) => (
        <Message key={userId} userId={userId} message={message} date={date} index={index} />
      ))}
    </Container>
  );
}

export default ConversationContent;
