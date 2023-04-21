import React from "react";
import styles from "./Contact.module.css";
import ContactForm from "@/components/molecules/ContactForm/ContactForm";
import Comment from "@/components/organism/Comment/Comment";

export default function Contact() {
  return (
    <main className={styles.contact}>
      <ContactForm/>
      <Comment/>
    </main>
  )
}