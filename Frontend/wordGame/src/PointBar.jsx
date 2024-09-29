import Score from './Score.jsx'
import ScoreChart from './ScoreChart.jsx'
import { AppContext } from './AppContext';
import { useContext } from 'react';

function PointBar(){
    const {achievedPoints, possiblePoints } = useContext(AppContext); 

    let levelScore = [0,3,7,12,23,35,56,72,100];
    for (let i = 0; i < levelScore.length; i++) {
        levelScore[i] = Math.ceil((levelScore[i] / 100) * possiblePoints); // Convert and round up
    }    

    let level = ['Beginner', 'Novice', 'Okay', 'Good', 'Solid', 'Nice', 'Great', 'Amazing', 'Genius'];

    const getLevelIdx = (currScore) => {
        for (let i = 0; i < levelScore.length; i++) {
            if (currScore < levelScore[i]) {
                return i-1; 
            }
        }
        return level.length - 1; 
    };
    const currLevelIdx = getLevelIdx(achievedPoints);
    const levelName = level[currLevelIdx];
    const pointsForNext = currLevelIdx < level.length - 1 
        ? levelScore[currLevelIdx + 1] - achievedPoints 
        : 0;
    return(
        <div className="sm:w-[420px] w-full flex justify-between py-4 px-2 sm:px-0">
            <Score level={levelName} next={pointsForNext}/>
            <ScoreChart currIdx={currLevelIdx} score={achievedPoints} max={possiblePoints}/>
        </div>
    )
}
export default PointBar;