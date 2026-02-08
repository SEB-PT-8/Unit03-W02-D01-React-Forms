import { use, useState } from "react"
function App() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleUsername(event){
    setUsername(event.target.value)
  }

  function handlePassword(event){
    setPassword(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault() // makes it so the form doesnt refresh when the submit button is clicked
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username:</label>
        <input value={username} onChange={handleUsername} id="username" type="text" />
        <label htmlFor="">password</label>
        <input value={password} onChange={handlePassword} type="password" />
        <button>Sign Up</button>
      </form>
    </div>

  )
}

export default App