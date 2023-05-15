import styles from "./PostHeader.module.css";
import Link from "next/link";

import Button from "@/components/atoms/Button/Button";

export default function PostHeader() {
  return (
    <header className={styles.header}>
      <h1>Posts</h1>
      <ul className={styles.filter}>
        <li>
          <Link href={'/post?filter=all'}><Button text={"All"}/></Link>
        </li>

        <li>
          <Link href={'/post?filter=projects'}><Button text={"Projects"}/></Link>
        </li>

        <li>
          <Link href={'/post?filter=records'}><Button text={"Records"}/></Link>
        </li>
      </ul>
    </header>
  )
}