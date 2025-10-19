import "./Navbar.css";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/jack.png";

function Navbar({setSidebar}) {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img src={menu_icon} alt="menu Icon" onClick={()=>setSidebar(prev=>prev===false?true:false)} className="menu-icon" />
        <img src={logo} alt="logo" className="logo" />
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={search_icon} alt="Search Icon" className="search-icon" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={upload_icon} alt="Upload Icon" className="upload-icon" />
        <img src={more_icon} alt="More Icon" className="more-icon" />
        <img
          src={notification_icon}
          alt="Notification Icon"
          className="notification-icon"
        />
        <img src={profile_icon} alt="Profile Icon" className="user-icon" />
      </div>
    </nav>
  );
}

export default Navbar;
