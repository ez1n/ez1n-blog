import {useState} from "react";
import styles from './Navbar.module.css';
import Link from "next/link";

import Logo from "@/components/atoms/Logo/Logo";
import Navigation from "@/components/molecules/Navigation/Navigation";
import HamburgerMenu from "@/components/atoms/HamburgerMenu/HamburgerMenu";

export default function Navbar() {
  const [isToggle, setIsToggle] = useState(false);

  const onClickMenu = () => {
    setIsToggle(prev => !prev);
  }

  return (
    <nav className={styles.navbar}>
      <Link href='/'><Logo/></Link>

      <Navigation isToggle={isToggle}/>

      <HamburgerMenu onClick={onClickMenu}/>
    </nav>
  )
}