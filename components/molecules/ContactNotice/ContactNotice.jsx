import React, {useState} from "react";
import styles from "./ContactNotice.module.css";

import Paper from "@/components/atoms/Paper/Paper";
import Button from "@/components/atoms/Button/Button";
import TextField from "@/components/atoms/TextField/TextField";
import CommentForm from "@/components/molecules/CommentForm/CommentForm";
import CommentsList from "@/components/organism/CommentsList/CommentsList";

export default function ContactNotice() {
  const [mode, setMode] = useState("Contact");

  const onClick = (mode) => setMode(mode);

  return (
    <div className={styles.container}>
      <Paper>
        <div className={styles.contents}>
          <h1 className={styles.title}>{mode}</h1>
          {
            mode === "Message" ? <Message onClick={onClick}/> :
              mode === "To Ez1n" ? <Comment onClick={onClick}/> : <Notice onClick={onClick}/>
          }
        </div>
      </Paper>
    </div>
  )
}

function Notice({onClick}) {
  const clickMessage = () => onClick("Message");
  const clickComment = () => onClick("To Ez1n");

  return (
    <>
      <ul className={styles.info}>
        <li>📧 Email : eodrmfdl1004@gmail.com</li>
        <li>💻 Github : https://github.com/ez1n</li>
        <li>📝 Blog : https://ttugttag-coding.tistory.com</li>
        <li>🏫 Education : 명지대학교 수학과</li>
        <li>
          <p>신입 프론트엔드 개발자 전예진입니다.</p>
          <p>메시지나 댓글을 이용하여 응원의 한마디를 보내주세요 :)</p>
        </li>
      </ul>

      <section className={styles.actions}>
        <div><Button type={"button"} text={"Message"} onClick={clickMessage}/></div>
        <div><Button type={"button"} text={"Comment"} onClick={clickComment}/></div>
      </section>
    </>
  )
}

function Message({onClick}) {
  const clickSend = (e) => {
    e.preventDefault();
    onClick("Notice");
    console.log("send message")
  }
  const clickCancel = () => onClick("Notice");

  return (
    <form className={styles.form}>
      <section>
        <TextField placeholder={"이름"} type={"text"}/>
        <TextField placeholder={"내용"} multiline={true} rows={9}/>
      </section>

      <section className={styles.actions}>
        <div><Button type={"submit"} text={"Send"} color={"secondary"} onClick={clickSend}/></div>
        <div><Button type={"button"} text={"Cancel"} color={"error"} onClick={clickCancel}/></div>
      </section>
    </form>
  )
}

function Comment({onClick}) {
  const clickGoBack = () => onClick("Notice");

  return (
    <>
      <CommentForm/>
      <CommentsList/>

      <section className={styles.actions}>
        <Button type={"button"} text={"Go Back"} color={"error"} onClick={clickGoBack}/>
      </section>
    </>
  )
}