import Navbar from './Navbar.jsx'
import PointBar from './PointBar.jsx'
import Letters from './Letters.jsx'
import AddedList from './AddedList.jsx'
import TypedText from './TypedText.jsx'
import InputButtons from './InputButtons.jsx'
import { AppProvider } from './AppContext.jsx'
function App() {
  return (
    <AppProvider>
      <div className='flex flex-col justify-center items-center'>
        <Navbar/>
        <PointBar/>
        <AddedList/>
        <TypedText/>
        <Letters/>
        <InputButtons/>
      </div>
    </AppProvider>
  )
}

export default App
