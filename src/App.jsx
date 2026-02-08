import { use, useState } from "react"
function App() {

  const [username, setUsername] = useState('')

  function handleUsername(event){
    setUsername(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="username">username:</label>
        <input value={username} onChange={handleUsername} id="username" type="text" />
        <button>Sign Up</button>
      </form>
    </div>

  )
}

export default App