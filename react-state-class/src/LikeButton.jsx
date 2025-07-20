import { useState } from "react"
export default function LikeButton() {
    let [isLiked,setisLiked]=useState(false);
    let [count, setCount] = useState(0);
    let toggleLike=()=>{
        setisLiked(!isLiked)
        setCount(count+1)
    }

    let likeStyle = {color: "red"};
    return (
        <div>
            <h3>If you like my work Click like button</h3>
            <p> Clicks = {count}</p>
            <button onClick={toggleLike}>
                {isLiked ? 
                (<i className="fa-solid fa-heart" style={likeStyle}></i>) 
                : (<i className="fa-regular fa-heart" ></i>)
                }
                
            </button>
        </div>
    )
}