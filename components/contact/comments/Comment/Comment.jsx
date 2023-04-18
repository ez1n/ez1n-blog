import React from "react";
import styles from "./Comment.module.css";
import CommentForm from "@/components/contact/comments/CommentForm/CommentForm";
import CommentsList from "@/components/contact/comments/CommentsList/CommentsList";

export default function Comment() {
  return (
    <section className={styles.comment}>
      <h1 className={styles.title}>To Ez1n.n</h1>

      <CommentForm/>
      <CommentsList/>
    </section>
  )
}