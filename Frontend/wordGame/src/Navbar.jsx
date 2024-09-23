function Navbar() {
  return (
    <div className="w-screen bg-yellow-400 flex justify-center">
      <div className="w-full sm:w-1/3 flex justify-between">
      <div>
        <span className="material-symbols-outlined font-light text-4xl">
          emoji_nature
        </span>
      </div>

      <div>
        <span className="material-symbols-outlined font-light text-4xl ml-4"> trophy </span>
        <span className="material-symbols-outlined font-light text-4xl ml-4"> settings </span>
        <span className="material-symbols-outlined font-light text-4xl ml-4"> help </span>
      </div>
      </div>
    </div>
  )
}

export default Navbar
