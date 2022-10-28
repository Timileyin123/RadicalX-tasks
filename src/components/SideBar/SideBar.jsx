import Radical from "../../Images/RadicallX-Black-Logo 1.png"
import Dashboard from "../../Images/dashboard-3.png"
import Medal from "../../Images/medal-star.png"
import Book from "../../Images/book.png"
import BriefCase from "../../Images/briefcase.png"
import Setting from "../../Images/setting-2.png"
import Rectangle from "../../Images/Rectangle 18895.png"
import "./SideBar.css";

const SideBar = () => {
    return(
        <div className="container">
        <div>
            <img src={Radical} alt="" className="SideBarImg"/>
        </div>
        <ul className="nav">
            <li><a href="#" className="navLink"><img src={Dashboard}className="dash" alt="" />  Dashboard</a></li>
            <li><a href="#" className="navLink"><img src={Medal}className="dash" alt="" />  Apprenterships</a></li>
            <li style={{backgroundColor: "rgba(102, 95, 239, 0.2)", border: "1px solid #793EF5", borderRadius: "16px", }}><a href="#" className="navLink" style={{color:"#793EF5"}}><img src={Book}className="dash" alt="" />  Internships</a></li>
            <li><a href="#" className="navLink"><img src={BriefCase}className="dash" alt="" /> Jobs</a></li>
            <li><a href="#" className="navLink"><img src={Setting}className="dash" alt="" /> Settings</a></li>
        </ul>
        <div className="sub-container">
            
            <img src={Rectangle} alt="" />
            <p>Adam Scott</p>
        </div>
        </div>
    );
}

export default SideBar;