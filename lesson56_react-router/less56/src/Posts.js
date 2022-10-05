import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
export default function Posts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        (async () => {
            const response = await fetch('http://192.168.0.158:3000/posts');
            const json = await response.json()
            setPosts(json)
        })()
    }, [])
    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    <div className="posts">
                        <img src={post.image} alt='img'/>
                        <p>{post.paragraphs[0]}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}