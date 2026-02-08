import { useState } from "react"
function App() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [allUsers, setAllUsers] = useState([])

  function handleUsername(event){
    setUsername(event.target.value)
  }

  function handlePassword(event){
    setPassword(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault() // makes it so the form doesnt refresh when the submit button is clicked
    const newUser = {
      username: username,
      password: password
    }
    
    setAllUsers([...allUsers, newUser])


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

      {allUsers.map((oneUser)=>
      <div key={oneUser.username}>
        <h2>{oneUser.username}</h2>
      </div>
      )}
    </div>

  )
}

export default App