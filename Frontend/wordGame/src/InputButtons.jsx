import DeleteButton from './DeleteButton'
import EnterButton from './EnterButton'
import WordsLeft from './WordsLeft'
export default function InputButtons() {
  return (
    <div className=' w-[250px] flex justify-evenly items-center'>
        <DeleteButton/>
        <WordsLeft/>
        <EnterButton/>
    </div>
  )
}
