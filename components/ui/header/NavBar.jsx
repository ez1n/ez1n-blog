import styles from './header.module.css';
import Link from "next/link";
import Logo from "@/components/ui/header/Logo";
import {AiOutlineMenu} from '@react-icons/all-files/ai/AiOutlineMenu';
import {useState} from "react";

export default function NavBar() {
  const [isToggle, setIsToggle] = useState(false);
  const onClickMenu = () => {
    setIsToggle(prev => !prev);
  }

  return (
    <nav className={styles.navbar}>
      <Link href='/'><Logo/></Link>

      <ul className={`${styles.menu} ${isToggle && `${styles.active}`}`}>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/project'>Projects</Link></li>
        <li><Link href='/interest'>Interests</Link></li>
        <li><Link href='/contact'>Contact</Link></li>
      </ul>

      <Link className={styles.toggle} href='#' onClick={onClickMenu}><AiOutlineMenu/></Link>
    </nav>
  )
}