import styles from "./Fab.module.css";
import {MdComment} from "@react-icons/all-files/md/MdComment";

export default function Fab({onClick}) {
  return (
    <button className={styles.button} onClick={onClick}>
      <MdComment/>
    </button>
  )
}