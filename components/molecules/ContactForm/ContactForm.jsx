import React, {useRef} from "react";
import styles from "./ContactForm.module.css";
import TextField from "@/components/atoms/TextField/TextField";
import Button from "@/components/atoms/Button/Button";

export default function ContactForm() {
  const nameRef = useRef();
  const emailRef = useRef();
  const contentRef = useRef();

  const sendMessage = (e) => {
    e.preventDefault();

    const message = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      content: contentRef.current.value
    }

    console.log(message)
  }

  return (
    <section className={styles.contactForm}>
      <h1 className={styles.title}>Contact Me</h1>

      <form className={styles.form}>
        <div className={styles.contentInfo}>
          <TextField placeholder="이름" inputRef={nameRef}/>
          <TextField type="email" placeholder="이메일 주소" inputRef={emailRef}/>
        </div>

        <TextField
          placeholder="내용"
          inputRef={contentRef}
          multiline={true}
          rows={10}
        />

        <div className={styles.button}>
          <Button type="submit" text="Send" onClick={sendMessage}/>
        </div>
      </form>
    </section>
  )
}