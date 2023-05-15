import styles from "./PostHeader.module.css";

import Button from "@/components/atoms/Button/Button";

export default function PostHeader() {
  return (
    <header className={styles.header}>
      <h1>Posts</h1>
      <ul className={styles.filter}>
        <li>
          <Button text={"All"} />
        </li>

        <li>
          <Button text={"Projects"} />
        </li>

        <li>
          <Button text={"Records"} />
        </li>
      </ul>
    </header>
  )
}