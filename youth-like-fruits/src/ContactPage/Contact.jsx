import ElevateAppBar from '../Components/ElevateAppBar/ElevateAppBar.jsx'
import SimpleBottomNavigation from './Boxes.jsx'
import ThreeColoredBoxes from './Boxes.jsx';
import TextLayoutt from './TextLayout.jsx';
import VirtualizedList from './List.jsx';
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
     <ThreeColoredBoxes/>
     {/*<Sidebar/>
    {/*<VirtualizedList/>*/}
     <TextLayoutt/>
    </div>
  )
}

export default Contact;
