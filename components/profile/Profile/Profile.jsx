import styles from "./Profile.module.css";
import {HiMail} from "@react-icons/all-files/hi/HiMail";
import {AiFillGithub} from "@react-icons/all-files/ai/AiFillGithub";
import Avatar from "@/components/profile/Avatar/Avatar";

export default function Profile() {
  return (
    <section className={styles.profile}>
      <Avatar/>

      <div className={styles.greet}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p className={styles.greetings}>Hello, I'm Yejin.</p>
        <p className={styles.greetings}>Front-end engineer</p>
      </div>

      <ul className={styles.contact}>
        <li>
          <a className={styles.info} href="mailto:eodrmfdl10044@gmail.com"><HiMail/> Mail</a>
        </li>
        <li>
          <a className={styles.info} href="https://github.com/ez1n" target="_blank"><AiFillGithub/> Github</a>
        </li>
        <li>
          <a className={styles.info} href="https://ttugttag-coding.tistory.com" target="_black"> Blog</a>
        </li>
      </ul>
    </section>
  )
}

