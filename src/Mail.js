import { IconButton } from "@material-ui/core";
import {
  Archive,
  Report,
  Delete,
  Markunread,
  Snooze,
  AssignmentTurnedIn,
  MoveToInbox,
  Label,
  MoreVert,
  ArrowBack,
  UnfoldMore,
  Print,
  ExitToApp,
  LabelImportant,
} from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router-dom";
import "./Mail.css";
function Mail() {
  let history = useHistory();
  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__tools__left">
          <IconButton
            onClick={() => {
              history.push("/");
            }}
            className="mail__tools__left__backButton"
          >
            <ArrowBack />
          </IconButton>
          <div className="mail__tools__left_part1">
            <IconButton>
              <Archive />
            </IconButton>
            <IconButton>
              <Report />
            </IconButton>
            <IconButton>
              <Delete />
            </IconButton>
          </div>

          <div className="mail__tools__left_part2">
            <IconButton>
              <Markunread />
            </IconButton>
            <IconButton>
              <Snooze />
            </IconButton>
            <IconButton>
              <AssignmentTurnedIn />
            </IconButton>
          </div>

          <div className="mail__tools__left_part3">
            <IconButton>
              <MoveToInbox />
            </IconButton>
            <IconButton>
              <Label />
            </IconButton>
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
        </div>
        <div className="mail__tools__right">
          <IconButton>
            <UnfoldMore />
          </IconButton>
          <IconButton>
            <Print />
          </IconButton>
          <IconButton>
            <ExitToApp />
          </IconButton>
        </div>
      </div>
      <div className="mail__body">
        <div className="mail__body__header">
          <h2>Subject</h2>
          <LabelImportant />
          <p>Title</p>
          <p>{new Date().toLocaleTimeString()}</p>
        </div>
        This is the mail body
      </div>
    </div>
  );
}

export default Mail;
