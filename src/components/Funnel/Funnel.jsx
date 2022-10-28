import Vector from "../../Images/Vector 4.png"
import Line from "../../Images/Line 90.png"
import Vector5 from "../../Images/Vector 5.png"
import "./Funnel.css"
const Funnel = () => {

    return (
        <>
         <div className="funnel">
                        <img src={Vector} alt="" />
                        <p>100,000</p>
                        <small>Total Enrollments</small>
                        <img src={Line} className="line" alt="" />
                        <div className="line1">
                            <p>65,000</p>
                            <small>Completion</small>
                            <img src={Line} className="line" alt="" />
                        </div>
                        <div className="stand">
                            <img src={Vector5} alt="" />
                            <p>850</p>
                            <small>Qualified Candidates</small>
                        </div>
                        <div className="line3">
                            <p>375</p>
                            <small>Reached Out</small>
                            <img src={Line} className="line" alt="" />
                        </div>
                        <div className="line4">
                            <p>300</p>
                            <small>Interview set</small>
                            <img src={Line} className="line" alt="" />
                        </div>
                        <div className="line5">
                            <p>150</p>
                            <small>Candidates Hired</small>
                        </div>
                    </div>
        </>
    );

}
 
export default Funnel;