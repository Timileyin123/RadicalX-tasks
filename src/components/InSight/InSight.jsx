import "./InSight.css";
import Calendar from "../../Images/calendar-2.png"
import Funnel from "../Funnel/Funnel";
import Title from "../Title/Title";

const InSight = () => {

        return (
            <div className="insight">
                <div className="insights">
                    <div className="insights-p">
                    <p className="heading">Internship insights</p>
                    <p>
                        In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in which knowledge about space can be both a priori and synthetic.
                    </p>
                    </div>
                    <div className="insight-chart">
                    <div className="filterBar">
                        <div className="filterBarOne">
                            <div className="filterOne">
                                <p className="week">This week</p>
                                <p className="month">This month</p>
                            </div>
                            <div className="firstBarTwo">
                            <img src={Calendar} alt="" />
                            <small className="date"> Select dates</small>
                        </div>
                        </div>
                    
                    </div>
                    <Funnel />
                </div>
                </div>
            <Title />
            
            </div>
        );
    
}

export default InSight;