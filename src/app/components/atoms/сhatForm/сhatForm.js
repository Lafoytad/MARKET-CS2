"use client";

import { useState } from "react";
import { createPost } from "@/app/services/actions";
import styles from "./сhatForm.module.scss";

const ChatForm = ({ onPostCreated }) => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = { title: "", body: "" };

    if (formData.title.length < 3 || formData.title.length > 12) {
      newErrors.title = "от 3 до 12 символов";
    }

    if (formData.body.length < 8 || formData.body.length > 100) {
      newErrors.body = "от 8 до 100 символов";
    }

    setErrors(newErrors);

    return !newErrors.title && !newErrors.body;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    try {
      const response = await createPost(formData);
      if (response.id) {
        const newPost = await response;
        onPostCreated(newPost);
        setFormData({ title: "", body: "" });
        setErrors({ title: "", body: "" });
        console.log("Form submitted successfully");
      } else {
        console.error("Error submitting form");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} method="post">
      <div className={styles.column}>
        <input
          className={`${styles.IName} ${errors.title ? styles.errorInput : ""}`}
          type="text"
          placeholder={errors.title ? errors.title : "Имя"}
          required
          name="title"
          value={errors.title ? "" : formData.title}
          onChange={handleChange}
        />
        <input
          className={`${styles.IMessage} ${
            errors.body ? styles.errorInput : ""
          }`}
          type="text"
          placeholder={errors.body ? errors.body : "Сообщение"}
          required
          name="body"
          value={errors.body ? "" : formData.body}
          onChange={handleChange}
        />
      </div>
      <input
        style={{
          backgroundColor: "rgb(0, 255, 13)",
        }}
        className={styles.IButton}
        type="submit"
        value=""
      />
    </form>
  );
};

export default ChatForm;
