import Navbar from './Navbar.jsx'
import PointBar from './PointBar.jsx'
import Letters from './Letters.jsx'
import AddedList from './AddedList.jsx'
function App() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Navbar/>
      <PointBar/>
      <AddedList/>
      <Letters/>
    </div>
  )
}

export default App
