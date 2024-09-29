import Score from './Score.jsx'
import ScoreChart from './ScoreChart.jsx'
function PointBar(){
    return(
        <div className="sm:w-[420px] w-full flex justify-between py-4 px-2 sm:px-0">
            <Score/>
            <ScoreChart/>
        </div>
    )
}
export default PointBar;