import './posts.css'
export default function Posts(props) {
    return (
        <ul>
            {props.posts.map((post) => (
                <li key={post.id}>
                    <h1>{post.title}</h1>
                    <div className='posts'>
                        <img src={post.image} />
                        <p>{post.text}</p>
                    </div>
                    <div className='button'>
                        <button onClick={() => { props.openPost(post.id) }}>reade more...</button>
                    </div>
                </li>
            ))}
        </ul>
    )
}