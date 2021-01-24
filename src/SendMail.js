import { Button, IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";
import "./SendMail.css";
import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import { CloseSendMessage } from "./features/mailSlice";
import { db } from "./firebase";
import firebase from "firebase";
function SendMail() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (formData) => {
    console.log(formData);
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(CloseSendMessage());
  };

  const dispatch = useDispatch();

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <IconButton>
          <Close onClick={() => dispatch(CloseSendMessage())} />
        </IconButton>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          name="to"
          placeholder="To"
          ref={register({ required: true })}
        />
        {errors.to && <p className="sendMail_error">To is Required</p>}
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          ref={register({ required: true })}
        />
        {errors.subject && (
          <p className="sendMail_error">Subject is Required</p>
        )}
        <textarea
          name="message"
          type="textarea"
          placeholder="Message"
          className="sendMail__message"
          ref={register({ required: true })}
        />
        {errors.message && (
          <p className="sendMail_error">Message is Required</p>
        )}
        <div className="sendMail__options">
          <Button className="sendMail__options__button" type="submit">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
