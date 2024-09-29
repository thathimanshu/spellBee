function DotCurr({score,passed}){
    return(
    <div className={`h-7 w-7 ${passed ? 'bg-themeColor dark:bg-themeColorDark' : 'bg-[hsl(216,42%,85%)] dark:bg-[#4b525d]'} rounded-full flex justify-center items-center text-sm`}>
        {score}
    </div>
    )
}
export default DotCurr