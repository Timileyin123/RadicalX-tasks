import "./Main.css";
import Square from "../../Images/add-square.png";
import InSight from "../InSight/InSight";
const Main = () =>{

        return (
        <div className="main">
            <div className="intern">
                <h1>Internship</h1>
                <div className="create">
                      <a href=""><img src={Square} alt="" /></a>
                      <a href="">Create New Internship</a>
                </div>
                </div>
                <InSight />
              
            
        </div>);

}

export default Main;