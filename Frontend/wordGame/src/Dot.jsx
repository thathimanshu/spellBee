function Dot({passed}){
    return(
        <div className={`h-2 w-2 ${passed ? 'bg-themeColor dark:bg-themeColorDark':'bg-[hsl(216,42%,85%)] dark:bg-[#4b525d]'}  rounded-full`}></div>
    )
}
export default Dot