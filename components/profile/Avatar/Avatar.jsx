import styles from "./Avatar.module.css";
import Image from "next/image";

export default function Avatar() {
  return (
    <section className={styles.avatar}>
      <Image className={styles.avatarImg} src="/images/profile/profile.jpg" alt="profile image" width={500} height={500}
             priority/>
    </section>
  )
}