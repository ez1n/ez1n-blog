import {useEffect, useRef, useState} from "react";

import Fab from "@/components/atoms/Fab/Fab";
import ContactNotice from "@/components/molecules/ContactNotice/ContactNotice";

export default function Contact() {
  const [openContact, setOpenContact] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (contactRef.current && !contactRef.current.contains(e.target)) {
        setOpenContact(false);
      }
    };
    window.addEventListener('mousedown', handleClick);

    return () => window.removeEventListener('mousedown', handleClick);
  }, [contactRef]);

  const clickFab = () => {
    setOpenContact(prev => !prev);
  }

  return (
    <div ref={contactRef}>
      {openContact && <ContactNotice/>}
      <Fab onClick={clickFab}/>
    </div>
  )
}