import { Button, IconButton } from "@material-ui/core";
import {
  Add,
  Duo,
  ExpandMore,
  Inbox,
  LabelImportant,
  NearMe,
  Notes,
  Person,
  Phone,
  Star,
} from "@material-ui/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        startIcon={<Add fontSize="large" />}
        className="sidebar__compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>

      <SidebarOption Icon={Inbox} selected={true} number={54} title="Inbox" />
      <SidebarOption Icon={Star} selected={false} number={54} title="Starred" />
      <SidebarOption
        Icon={LabelImportant}
        selected={false}
        number={54}
        title="Important"
      />
      <SidebarOption Icon={NearMe} selected={false} number={54} title="Sent" />
      <SidebarOption Icon={Notes} selected={false} number={54} title="Drafts" />
      <SidebarOption
        Icon={ExpandMore}
        selected={false}
        number={54}
        title="More"
      />
      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
