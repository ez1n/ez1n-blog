import styles from "./ContactNotice.module.css";

import Paper from "@/components/atoms/Paper/Paper";
import Button from "@/components/atoms/Button/Button";

export default function ContactNotice() {
  return (
    <div className={styles.container}>
      <Paper>
        <h1 className={styles.title}>Contact</h1>

        <section className={styles.contents}>
          <ul className={styles.info}>
            <li>📧 Email : eodrmfdl1004@gmail.com</li>
            <li>💻 Github : https://github.com/ez1n</li>
            <li>📝 Blog : https://ttugttag-coding.tistory.com</li>
            <li>🏫 Education : 명지대학교 수학과</li>
          </ul>

          <section>
            <p>신입 프론트엔드 개발자 전예진입니다.</p>
            <p>메시지나 댓글을 이용하여 응원의 한마디를 보내주세요 :)</p>
          </section>

          <section className={styles.actions}>
            <div><Button type={"button"} text={"Message"}/></div>
            <div><Button type={"button"} text={"Comment"}/></div>
          </section>
        </section>
      </Paper>
    </div>
  )
}