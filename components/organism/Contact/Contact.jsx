import Fab from "@/components/atoms/Fab/Fab";
import ContactNotice from "@/components/molecules/ContactNotice/ContactNotice";
import {useState} from "react";

export default function Contact() {
  const [contactOpen, setContactOpen] = useState(false);

  const clickFab = () => {
    setContactOpen(prev => !prev);
  }

  return (
    <>
      {contactOpen && <ContactNotice/>}
      <Fab onClick={clickFab}/>
    </>
  )
}