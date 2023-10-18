import BarGraph from "./BarGraph";
import '../CSS/StatsContainer.css';
import DonutChart from "./DonutChart";

function StatsContainer(){
    return(
        <div className="stats-container">
        <BarGraph/>
        <DonutChart/>
        </div>
    );
}

export default StatsContainer;