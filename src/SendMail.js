import { Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./firebase";
import "./SendMail.css";
import firebase from "firebase";

const SendMail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData) => {
    console.log(formData);
    db.collection("emails")
      .add({
        to: formData.to,
        subject: formData.subject,
        message: formData.message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        dispatch(closeSendMessage());
      });
  };
  const dispatch = useDispatch();
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <Close
          className="sendMail__close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="To"
          type="text"
          {...register("to", { required: "This field is required." })}
        />
        {errors.to && <p className="sendMail__error">{errors.to.message}</p>}
        <input
          placeholder="Subject"
          type="text"
          {...register("subject", { required: "This field is required." })}
        />
        {errors.subject && (
          <p className="sendMail__error">{errors.subject.message}</p>
        )}
        <input
          placeholder="Message..."
          type="text"
          {...register("message", { required: "This field is required." })}
          className="sendMail__message"
        />
        {errors.message && (
          <p className="sendMail__error">{errors.message.message}</p>
        )}
        <div className="sendMail__options">
          <Button type="submit" className="sendMail__send">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
