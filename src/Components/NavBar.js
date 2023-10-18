import NavButton from "./NavButton";
import {LiaBattleNet} from 'react-icons/lia';
import {PiUsers}  from 'react-icons/pi';
import {TbMoneybag, TbHelpOctagon, TbFloatLeft} from 'react-icons/tb';

import {GoPackage} from 'react-icons/go';
import {MdOutlineSpaceDashboard} from 'react-icons/md';
import "../CSS/NavBar.css";
import ProfilePhoto from "../Images/p2.png";

function NavBar(){
    let buttonList = [
        {text : "Dashboard", icon : <MdOutlineSpaceDashboard/>},
        {text :"Product", icon : <GoPackage/>},
        {text : "Customers" , icon : <PiUsers/>},
        {text : "Income" , icon : <TbMoneybag/>},
        {text : "Promote" , icon : <TbMoneybag/>},
        {text : "Help", icon : <TbHelpOctagon/>},
    ];
    return(
        
        
        <div className="nav-bar">
            <header><LiaBattleNet/> Dashboard</header>
            <br/>
           
            {buttonList.map((button, index) => (
                <NavButton  key= {index} text={button.text} icon={button.icon} ></NavButton>
            ))}
            <footer className="footer">
            <div><img src={ProfilePhoto}></img></div>
            <div className="info">Evano</div>
            </footer>
            
        </div>
        
        
    );
}
export default NavBar;