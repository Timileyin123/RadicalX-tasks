// import TitleContent from "../../TitleContent/TitleContent";
import "./Title.css"
import ArrowSquare from "../../Images/arrow-square-down.png"
import TitleContent from "../../TitleContent/TitleContent";
// import Qualified from "../../Images/Qualified Candidates.png"
// import Chart from "../../Images/chart.png"
// import ProfileUser from "../../Images/profile-2user.png"
// import MoreImg from  "../../Images/more-2.png"
const Title = () =>  {

        return (
            <div className="title-container">
            <div className="titles">
                <div className="Title">
                    <div className="internship-titles">
                    <div className="title">
                        <strong>Internship Title</strong>
                        <img src={ArrowSquare} alt="" />
                    </div>
                
                </div>
                <div className="completion">
                    <div className="period">
                        <strong>Completion Period</strong>
                        <img src={ArrowSquare} alt="" />
                    </div>
                    
                </div>
                <div className="enroll">
                        <div className="total-enroll">
                            <strong>Total Enrolled</strong>
                            <img src={ArrowSquare} alt="" />
                        </div>
                </div>
                <div className="qualifiers">
                    <div className="qualifiedCandi">
                        <strong>Qualified Candidates</strong>
                        <img src={ArrowSquare} alt="" />
                    </div>
                </div>
                <div className="action">
                    <div className="heading">
                        <strong>Actions</strong>
                    </div>
                
                </div>
                </div>
                <TitleContent />
                <TitleContent />
                <TitleContent />
                <TitleContent />
                <TitleContent />
            </div>
            </div>
        );
    
}

export default Title;