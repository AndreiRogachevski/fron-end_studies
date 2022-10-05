import { useState, useEffect } from 'react'
import Posts from './Posts.js'
import Post from './Post.js'
import Spinner from './Spinner.js'
import './index.css'
function App() {
  const [posts, setPosts] = useState([])
  const [id, setId] = useState()
  const [isLoad, setIsLoad] = useState(false)
  useEffect(() => {
    (async () => {
      setIsLoad(true)
      const responce = await fetch('http://192.168.0.157:3000/posts')
      const json = await responce.json();
      setPosts(json)
      setIsLoad(false)
    })()
  }, [])

  return (
    <div className="App">
      {isLoad ? <Spinner/> : !id ? <Posts posts={posts} openPost={setId} /> : <Post postId={id} closePost={setId} setIsLoad={setIsLoad}/>}
    </div>
  );
}

export default App;
