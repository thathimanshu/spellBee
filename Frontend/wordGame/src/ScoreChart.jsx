import Dot from './Dot'
import Dash from './Dash'
function ScoreChart(){
    return(
        <div className="flex items-center justify-center flex-1 ml-3">
            <div className="h-7 w-7 bg-themeColor dark:bg-themeColorDark rounded-full"></div>
            <Dash/>
            <Dot/>
            <Dash/>
            <Dot/>
            <Dash/>   
            <Dot/>
            <Dash/>
            <Dot/>
            <Dash/>
            <Dot/>
            <Dash/>
            <Dot/>
            <Dash/>
            <Dot/>
            <Dash/>
            <div className="h-7 w-7 bg-themeColor dark:bg-themeColorDark rounded-full"></div>
        </div>
    )
}

export default ScoreChart