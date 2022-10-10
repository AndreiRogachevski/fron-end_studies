import { useState, useEffect } from "react"
import './post.css'
export default function Post(props) {
    const [post, setPost] = useState({})
    useEffect(() => {
        (async () => {
            props.setIsLoad(true)
            const responce = await fetch(`http://192.168.0.157:3000/posts/${props.postId}`)
            const json = await responce.json();
            setPost(json)
            props.setIsLoad(false)
        })()
    }, [props.postId])
    return (
        <div className="post">
            <div className="button">
                <button onClick={() => { props.closePost(null) }}>Back</button>
            </div>
            <h1>{post.title}</h1>
            <div>
                <img src={post.image} />
                <p>{post.text}</p>
            </div>
        </div>
    )
}