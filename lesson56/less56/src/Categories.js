import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
export default function Categories() {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        (async () => {
            const response = await fetch('http://192.168.0.158:3000/categories');
            const json = await response.json()
            setCategories(json)
        })()
    }, [])
    return (
        <ul>
            {categories.map((item) => (<li key={item.id}><a href={`/posts/${item.id}`}>{item.title}</a></li>))}
        </ul>
    )
}