function Dash({ passed }) {
    return (
      <div className={`h-0.5 sm:h-1 sm:w-7 w-4 ${passed ? 'bg-themeColor dark:bg-themeColorDark' : 'bg-[hsl(216,42%,85%)] dark:bg-[#4b525d]'}`}></div>
    );
  }
  
  export default Dash;
  