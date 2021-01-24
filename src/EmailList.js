import { Checkbox, IconButton } from "@material-ui/core";
import {
  MoreVert,
  Refresh,
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  KeyboardHide,
  Settings,
  Inbox,
  People,
  LocalOffer,
} from "@material-ui/icons";
import React from "react";
import "./EmailList.css";
import Section from "./Section";
import EmailRow from "./EmailRow";
function EmailList() {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Refresh />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList_settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>

      <div className="emailList_sections">
        <Section Icon={Inbox} title="Primary" color="red" selected={true} />
        <Section
          Icon={People}
          title="Social"
          color="#1A73E8"
          selected={false}
        />
        <Section
          Icon={LocalOffer}
          title="Promotions"
          color="green"
          selected={false}
        />
      </div>
      {new Array(50).fill(0).map((item, index) => {
        return (
          <EmailRow
            key={index}
            title={"Shiva Kumar Panda"}
            subject={"Meeting Tonight"}
            description={"Agenda inside the Agenda is to Party"}
            date_time={`${
              new Date().toLocaleDateString() +
              ", " +
              new Date().toLocaleTimeString()
            }`}
          />
        );
      })}
    </div>
  );
}

export default EmailList;
