import {useRef} from "react";
import styles from "./CommentForm.module.css";
import Button from "@/components/atoms/Button/Button";
import TextField from "@/components/atoms/TextField/TextField";

export default function CommentForm() {
  const commentRef = useRef();

  const sendComment = (e) => {
    e.preventDefault();

    const comment = {comment: commentRef.current.value};
    console.log(comment);
  }

  return (
    <form className={styles.form}>
      <TextField placeholder="하고싶은 말이 있나요~?" inputRef={commentRef}/>

      <div className={styles.button}>
        <Button type="submit" text="Enter" onClick={sendComment}/>
      </div>
    </form>
  )
}