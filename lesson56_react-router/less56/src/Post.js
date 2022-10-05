import { useState, useEffect } from "react";
import { useParams ,Link} from "react-router-dom";
export default function Post() {
    const { id } = useParams()
    const [post, setPost] = useState({})
    useEffect(() => {
        (async () => {
            const response = await fetch('http://192.168.0.158:3000/posts/' + id);
            const json = await response.json()
            setPost(json)
        })()
    }, [id])
    return (
    <>
        { post && <div>
            <Link to={'/'}>back</Link>
            <h1>{post.title}</h1>
            <img src={post.image} alt='img' />
            {post.paragraphs?.map((paragraph,index)=>(<p key={index}>{paragraph}</p>))}
        </div>}
    </>
    )

}