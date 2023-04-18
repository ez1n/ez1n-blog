import React from "react";
import styles from "./Contact.module.css";
import ContactForm from "@/components/contact/ContactForm/ContactForm";
import Comment from "@/components/contact/comments/Comment/Comment";

export default function Contact() {
  return (
    <main className={styles.contact}>
      <ContactForm/>
      <Comment/>
    </main>
  )
}