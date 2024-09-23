import Score from './Score.jsx'
import ScoreChart from './ScoreChart.jsx'
function PointBar(){
    return(
        <div className="sm:w-1/3 wd-full flex justify-between p-2">
            <Score/>
            <ScoreChart/>
        </div>
    )
}
export default PointBar;