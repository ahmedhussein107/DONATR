
import React , {useState} from 'react'
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';
import './SideBar.css';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';

const fontSize = '3vh';

function SideBar(props) {
    const menuItem = props.menuItem;
    const[open ,setOpen] = useState(false);
    const toggle = () => setOpen (!open);
    return (
        <div className="container">
           <div style=
           {{
            width: open ? "20vw" : "4vw", 
            background: `linear-gradient(to bottom, #3C4F59, #426D84)`,
            color: `#fff`,
            height: `100%`,
            transition: `all 0.2s`,
            // position: `fixed`
            }}>
               <div className="top_section">
                   <div style={{marginLeft: open ? "15vw" : "0vw" , transition: `all 0.2s`}} 
                   className="bars">
                       <MenuIcon onClick={toggle} style={{fontSize: fontSize, cursor: 'pointer',fill: '#D5E0E6'}}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div>{item.icon}</div>
                            <div style=
                                {{
                                    display: open ? "block" : "none",
                                    fontSize: '1.2vw',
                                    color: '#D5E0E6',
                                }}>
                                    {item.name}
                            </div>
                       </NavLink>
                   ))
               }
           </div>
           {/* <main>{children}</main> */}
        </div>
    );
}

SideBar.propTypes = {
    menuItem: PropTypes.array
};

SideBar.defaultProps = {
    menuItem:[
        {

            path: "/organization",
            name: "Dashboard",
            icon: <HomeIcon style={{ fontSize: fontSize, fill: '#D5E0E6' }} />
        },
        {
            path: "/organization/create-post",
            name: "Create donation posts",
            icon: <ListIcon style={{ fontSize: fontSize, fill: '#D5E0E6' }} />
        },
        {
            path: "/organization/view-posts",
            name: "View donation posts",
            icon: <ListIcon style={{ fontSize: fontSize, fill: '#D5E0E6' }} />
        },
      ]
};

export default SideBar