import styles from "./Navigation.module.css";
import Link from "next/link";

export default function Navigation({isToggle}) {
  return (
    <ul className={`${styles.menu} ${isToggle && `${styles.active}`}`}>
      <li><Link href='/'>Home</Link></li>
      <li><Link href='/post'>Posts</Link></li>
      <li><Link href='/interest'>Interests</Link></li>
    </ul>
  )
}