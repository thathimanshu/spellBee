import DeleteButton from './DeleteButton'
import EnterButton from './EnterButton'
export default function InputButtons() {
  return (
    <div className=' w-[250px] flex justify-evenly'>
        <DeleteButton/>
        <EnterButton/>
    </div>
  )
}
