function Score({level,next}){
    return(
        <div>
            <p className="font-semibold">{level}</p>
            <p className="text-sm text-nowrap"><span className="font-semibold text-slate-700 dark:text-white">{next}</span> to better</p>
        </div>
    )
}

export default Score