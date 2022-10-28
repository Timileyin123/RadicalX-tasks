import Qualified from "../Images/Qualified Candidates.png"
import Chart from "../Images/chart.png"
import ProfileUser from "../Images/profile-2user.png"
import MoreImg from  "../Images/more-2.png"
import "./TitleContent.css";
const TitleContent = () => {
    
        return (
            <>
            <div className="titleContent">
                <div className="track">
                        <div className="name-desc">
                            <div className="name">
                                <strong>Product Design GVI</strong>
                            </div>
                            <div className="desc">
                                <p>Amet minim mollit non deserunt est sit aliqua dolor do amet sint.</p>
                            </div>
                        </div>
                    </div>
                    <div className="days">
                        <strong>120 days</strong>
                        <p>(created on 10/12/2021)</p>
                    </div>
                    <div className="enrolled">
                            <strong>20,000</strong>
                    </div>
                    <div className="qualifierChart">
                        <div className="candidate">
                            <p>120</p>
                            <img src={Qualified} alt="" />
                        </div>
                    </div>
                    <div className="action-chart">
                        <div className="buttons-group">
                            <img src={Chart} alt="" />
                            <img src={ProfileUser} alt="" />
                            <img src={MoreImg} alt="" />
                        </div>
                    </div>
            </div>
            </>
        );
    
}

export default TitleContent;