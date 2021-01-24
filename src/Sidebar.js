import { Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import SidebarOption from "./SidebarOption";
import "./Sidebar.css";
import {
  Inbox,
  Star,
  Snooze,
  Send,
  Drafts,
  ExpandMore,
  Duo,
  ContactPhone,
  VideoCall,
  ContactSupportOutlined,
} from "@material-ui/icons";

import { useDispatch } from "react-redux";
import { OpenSendMessage } from "./features/mailSlice";

function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        onClick={() => dispatch(OpenSendMessage())}
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar_compose"
      >
        Compose
      </Button>

      <SidebarOption Icon={Inbox} title="Inbox" number={54} selected={true} />
      <SidebarOption Icon={Star} title="Starred" number={54} selected={false} />
      <SidebarOption
        Icon={Snooze}
        title="Snoozed"
        number={54}
        selected={false}
      />
      <SidebarOption Icon={Send} title="Sent" number={54} selected={false} />
      <SidebarOption
        Icon={Drafts}
        title="Drafts"
        number={54}
        selected={false}
      />
      <SidebarOption
        Icon={ExpandMore}
        title="More"
        number={""}
        selected={false}
      />
      <div className="sidebar_footer">
        <IconButton>
          <Duo />
        </IconButton>
        <IconButton>
          <ContactPhone />
        </IconButton>
        <IconButton>
          <VideoCall />
        </IconButton>
      </div>
    </div>
  );
}

export default Sidebar;
