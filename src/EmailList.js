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
import React, { useState, useEffect } from "react";
import "./EmailList.css";
import Section from "./Section";
import EmailRow from "./EmailRow";
import { db } from "./firebase";

function EmailList() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setEmails(
          snapshot.docs.map((doc) => {
            return { id: doc.id, data: doc.data() };
          })
        );
      });
    console.log(emails);
  }, []);

  // useEffect(() => {}, [emails]);

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
      {emails.map(({ id, data: { to, subject, message, timestamp } }) => {
        return (
          <EmailRow
            key={id}
            id={id}
            title={to}
            subject={subject}
            description={message}
            // date_time={`${
            //   new Date().toLocaleDateString() +
            //   ", " +
            //   new Date().toLocaleTimeString()
            // }`}
            date_time={new Date(timestamp?.seconds * 1000).toUTCString() + " "}
          />
        );
      })}
    </div>
  );
}

export default EmailList;
