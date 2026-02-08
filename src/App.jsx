// import { useState } from "react"
// function App() {

//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')
//   const [allUsers, setAllUsers] = useState([])

//   function handleUsername(event){
//     setUsername(event.target.value)
//   }

//   function handlePassword(event){
//     setPassword(event.target.value)
//   }

//   function handleSubmit(event){
//     event.preventDefault() // makes it so the form doesnt refresh when the submit button is clicked
//     const newUser = {
//       username: username,
//       password: password
//     }
    
//     setAllUsers([...allUsers, newUser])

//     setUsername('')
//     setPassword('')


//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="username">username:</label>
//         <input value={username} onChange={handleUsername} id="username" type="text" />
//         <label htmlFor="">password</label>
//         <input value={password} onChange={handlePassword} type="password" />
//         <button>Sign Up</button>
//       </form>

//       {allUsers.map((oneUser)=>
//       <div key={oneUser.username}>
//         <h2>{oneUser.username}</h2>
//       </div>
//       )}
//     </div>

//   )
// }

// export default App






import { useState } from "react"
function App() {



  const [allUsers, setAllUsers] = useState([])
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [isDisabled, setIsDisabled] = useState(true)

  function handleChange(event){
    if(formData.password && formData.username){
      setIsDisabled(false)
    }
    else{
      setIsDisabled(true)
    }
        setFormData({ ...formData, [event.target.name]: event.target.value });

  }


  function handleSubmit(event){
    event.preventDefault() // makes it so the form doesnt refresh when the submit button is clicked

    if(!formData.username || !formData.password){
      alert('All Fields are required')
      return
    }
    setAllUsers([...allUsers, formData])

    setFormData({
    username: '',
    password: ''
  })


  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username:</label>
        <input name="username" value={formData.username} onChange={handleChange} id="username" type="text" />
        <label htmlFor="">password</label>
        <input name="password" value={formData.password} onChange={handleChange} type="password" />
        <button disabled = {isDisabled}>Sign Up</button>
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