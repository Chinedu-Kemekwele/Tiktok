import React from "react";
import "../styles/VideoFooter.css";

import { Button, Avatar } from "@material-ui/core";

function VideoFooter({ channel, avatarSrc, likes, shares, song }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <Avatar src={avatarSrc} />
        <h3>
          {channel} . <Button>Follow</Button>
        </h3>
      </div>
    </div>
  );
}

export default VideoFooter;
