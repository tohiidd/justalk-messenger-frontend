import {Box, Typography} from "@mui/material";
import Image from "next/image";

interface Props {
  userId: string;
  message: string;
  date: string;
  index: number;
}

function Message({userId, message, date, index}: Props) {
  const myId = "4";

  const isMe = userId === myId;

  return (
    <Box sx={{display: "flex", justifyContent: isMe ? "start" : "end "}}>
      <Box
        marginTop={index === 0 ? 12 : 1}
        sx={{display: "flex", gap: "10px", maxWidth: "50%", flexDirection: isMe ? "row" : "row-reverse"}}
      >
        <Box sx={{display: "flex", alignItems: "end", img: {borderRadius: "50%"}}}>
          <Image
            src={"https://res.cloudinary.com/dmgb7kvmn/image/upload/v1667375697/jusTalk/zewq69s3crcubsawfsa9.jpg"}
            alt="user pic"
            width={35}
            height={35}
          />
        </Box>

        <Box sx={{textAlign: isMe ? "left" : "right"}}>
          <Typography
            component="p"
            sx={{
              padding: "10px",
              backgroundColor: isMe ? "common.white" : "common.lightGreen",
              color: "common.black",
              fontSize: "15px",
              borderRadius: "3px",
            }}
          >
            {message}
          </Typography>
          <Typography component="span" sx={{color: "common.grey200", fontSize: "12px", fontWeight: 500}}>
            {date}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Message;
