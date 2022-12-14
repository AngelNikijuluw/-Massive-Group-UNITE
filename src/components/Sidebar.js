import React,{useState} from 'react';
import {
    FaTh,
    FaBookOpen,
    FaEdit,
    FaBars,

} from "react-icons/fa";
import {
    AiOutlineQrcode

} from "react-icons/ai";
import { NavLink } from 'react-router-dom';


let Sidebar = ({children}) => {
    let[isOpen ,setIsOpen] = useState(false);
    let toggle = () => setIsOpen (!isOpen);

    let menuItem = [
        {
            path : "/Dashboard",
            name : "Dashboard",
            icon :<FaTh/>
        },
        {
            path : "/about",
            name : "Buku Tamu",
            icon : <FaBookOpen/>
        },
        {
            path : "/analytics",
            name : "Buat Undangan",
            icon : <FaEdit/>
        },
        {
            path : "/product",
            name : "QR Code",
            icon : <AiOutlineQrcode/>
        },
        
    ]

    return(
        <div className="body">
        <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
            <div className="top_section">
                <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                    <FaBars onClick={toggle}/>
                </div>
            </div>
            {
                menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
        <main>{children}</main>
     </div>
    )
}

export default Sidebar;