import { useState } from "react"

export default function CommentsForm() {
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5
    })

    let handleInputChange = (event) => {
      setFormData((currData) => {
        return {...currData, [event.target.name] : event.target.value}
      })
    }
    
    let handleSubmit = (event) => {
        console.log(formData)
        event.preventDefault();
        setFormData({
           username: "",
           remarks: "",
           rating: 5 
        })
    }

    return(
        <div>
            <h2>Give a Comment</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input placeholder="username" type="text" value={formData.username} onChange={handleInputChange} id="username" name="username"/>
                <br></br><br></br>

                <label htmlFor="remarks">Remarks</label>
                <textarea value={formData.remarks} placeholder="Add Few Remarks" onChange={handleInputChange} id="remarks" name="remarks"></textarea>
                <br></br><br></br>

                <label htmlFor="rating">Rating</label>
                <input placeholder="rating" type="number" min={1} max={10} value={formData.rating} onChange={handleInputChange} id="rating" name="rating"/>
                <br></br><br></br>
                <button>Add Comment</button>
            </form>
        </div>
    )
}