import { Checkbox, IconButton } from "@material-ui/core";
import { LabelImportantOutlined, Star } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router-dom";
import "./EmailRow.css";
import { useDispatch } from "react-redux";
import { SetMailData } from "./features/mailSlice";

function EmailRow({ title, subject, description, date_time }) {
  const dispatch = useDispatch();
  let history = useHistory();
  return (
    <div className="emailRow">
      <div className="emailRow__part1">
        <div className="emailRow__part1__options">
          <Checkbox />
          <IconButton>
            <Star />
          </IconButton>
          <IconButton>
            <LabelImportantOutlined />
          </IconButton>
        </div>
        <h3
          onClick={() => {
            dispatch(
              SetMailData({
                title: title,
                subject: subject,
                description: description,
                date_time: date_time,
              })
            );
            history.push("/mail");
          }}
          className="emailRow__part1__title"
        >
          {title}
        </h3>
        <h4
          onClick={() => {
            dispatch(
              SetMailData({
                to: title,
                subject: subject,
                description: description,
                date_time: date_time,
              })
            );
            history.push("/mail");
          }}
          className="emailRow__part1__message"
        >
          {subject}
          <span className="emailRow__part1__description"> - {description}</span>
        </h4>
      </div>
      <div
        onClick={() => {
          dispatch(
            SetMailData({
              to: title,
              subject: subject,
              description: description,
              date_time: date_time,
            })
          );
          history.push("/mail");
        }}
        className="emailRow__part2"
      >
        <div className="emailRow__part2__time">{date_time}</div>
      </div>
    </div>
  );
}

export default EmailRow;
