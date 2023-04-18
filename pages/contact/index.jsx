import React from 'react';
import ContactForm from "@/components/contact/ContactForm/ContactForm";
import Comment from "@/components/contact/Comment/Comment";

export default function ContactPage(props) {
  return (
    <>
      <ContactForm/>
      <Comment/>
    </>
  );
}