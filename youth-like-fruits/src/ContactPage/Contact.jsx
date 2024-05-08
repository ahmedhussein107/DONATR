import ElevateAppBar from '../Components/ElevateAppBar/ElevateAppBar.jsx'
import TextLayoutt from './TextLayout.jsx';
import DisplayIcons from './DisplayIcons.jsx';
import ContactInfo from './ContactInfo.jsx';
import ContactList from './ContactList.jsx';
import LinkList from './ContactList.jsx';
//import { Sidebar } from './Sidebar.jsx';
//import styled from "@emotion/styled";
//import classnames from "classnames";
//import { useLegacySidebar } from "../hooks/useLegacySidebar";                                 ^
//import { useMediaQuery } from "../hooks/useMediaQuery";
//import { sidebarClasses } from "../utils/utilityClasses";

function Contact() {



  return (
  <div className='container'>
    <ElevateAppBar/>
    <ContactInfo/>
    <DisplayIcons/>
    <LinkList/>
    <TextLayoutt/>
  </div>
  )
}

export default Contact;
