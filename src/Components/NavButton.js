import {MdOutlineKeyboardArrowRight} from 'react-icons/md'

function NavButton({text,icon}){
    //const text = "button"
    //console.log("props", icon);
    return (
        
            <button className="nav-button">{icon} &nbsp;
                {text}  <MdOutlineKeyboardArrowRight />
            </button>
        
    );
}

export default NavButton;