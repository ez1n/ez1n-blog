import styles from "./HamburgerMenu.module.css";
import {AiOutlineMenu} from "@react-icons/all-files/ai/AiOutlineMenu";

export default function HamburgerMenu({onClick}){
  return (
    <div className={styles.toggle} onClick={onClick}>
      <AiOutlineMenu/>
    </div>
  )
}