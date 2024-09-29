import Dot from './Dot'
import DotCurr from './DotCurr'
import Dash from './Dash'
function ScoreChart({currIdx,score,max}){
    
    return(
        <div className="flex items-center justify-center flex-1 ml-3">
            {currIdx===0 ? <DotCurr passed={currIdx>=0 ? true:false} score={score}/> : <Dot passed={currIdx>=0 ? true : false} /> }
            <Dash passed={currIdx>0 ? true : false} />
            {currIdx===1 ? <DotCurr passed={currIdx>=1 ? true:false} score={score}/> : <Dot passed={currIdx>=1 ? true : false} /> }
            <Dash passed={currIdx>1 ? true : false} />
            {currIdx===2 ? <DotCurr passed={currIdx>=2 ? true:false} score={score}/> : <Dot passed={currIdx>=2 ? true : false} /> }
            <Dash passed={currIdx>2 ? true : false} />   
            {currIdx===3 ? <DotCurr passed={currIdx>=3 ? true:false} score={score}/> : <Dot passed={currIdx>=3 ? true : false} /> }
            <Dash passed={currIdx>3 ? true : false} />
            {currIdx===4 ? <DotCurr passed={currIdx>=4 ? true:false} score={score}/> : <Dot passed={currIdx>=4 ? true : false} /> }
            <Dash passed={currIdx>4 ? true : false} />
            {currIdx===5 ? <DotCurr passed={currIdx>=5 ? true:false} score={score}/> : <Dot passed={currIdx>=5 ? true : false} /> }
            <Dash passed={currIdx>5 ? true : false} />
            {currIdx===6 ? <DotCurr passed={currIdx>=6 ? true:false} score={score}/> : <Dot passed={currIdx>=6 ? true : false} /> }
            <Dash passed={currIdx>6 ? true : false} />
            {currIdx===7 ? <DotCurr passed={currIdx>=7 ? true:false} score={score}/> : <Dot passed={currIdx>=7 ? true : false} /> }
            <Dash passed={currIdx>7 ? true : false} />
            <DotCurr score={max} passed={currIdx>7 ? true : false} />
        </div>
    )
}

export default ScoreChart