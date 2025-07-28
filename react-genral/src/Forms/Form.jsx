import { useState } from "react"

export default function Form () {
    // let [fullName, setFullName] = useState("");
    // let [username, setUsername] = useState("");

    // common method for multiple input
    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: ""      
    })

    // let handleNameChange = (event) => {
    //     setFullName(event.target.value)
    // }

    // let handleUsername = (event) => {
    //     setUsername(event.target.value)
    // }

    // common handle
    let handleInputChange = (event) => {
        // let fieldName = event.target.name; // instead of this we can directly  use event.target.name
        // let newValue = event.target.value
        
        setFormData((currData) => {
            return{...currData, [event.target.name]: event.target.value}
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData)
        setFormData({
            fullName: "",
            username: ""
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full Name :</label>
            <input 
            placeholder="enter full name" 
            type="text" 
            value={formData.fullName} 
            // onChange={handleNameChange} 
            id="fullname" 
            name="fullName" // name should always be same as the state value
            onChange={handleInputChange}
            />
            <br></br>
            <label htmlFor="username">User Name :</label>
            <input 
             placeholder="enter User name"
             type="text"
             value={formData.username} 
            //  onChange={handleUsername} 
             id="username"
             name="username"
             onChange={handleInputChange}
             />
             <br></br>
            <label htmlFor="passsword">Password :</label>
            <input 
             placeholder="enter password"
             type="password"
             value={formData.password} 
            //  onChange={handleUsername} 
             id="Password"
             name="password"
             onChange={handleInputChange}
             />
            <button>Submit</button>
        </form>
    )
}