import { useContext} from "react";
import { AppContext } from "./AppContext"

export default function WordsLeft() {
  const {wordsLeft} = useContext(AppContext);
  return (
    <div className="rounded-full h-14 w-14 border-2 font-semibold text-xl flex justify-center items-center">
        {wordsLeft}
    </div>
  )
}
