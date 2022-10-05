import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
export default function Tags() {
    const { id } = useParams()
    const [tags, setTags] = useState([])
    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://192.168.0.158:3000/posts/' + id)
                const json = await response.json()
                setTags(json.tags)
            }
        )()
    }, [id])
    return (
        <ul>
            {tags.map((tag)=>(<li key={tags.id}>{tags.title}</li>))}
        </ul>
    )
}