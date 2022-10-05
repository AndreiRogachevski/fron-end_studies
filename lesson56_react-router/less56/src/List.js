import { Link } from "react-router-dom";
export default function List(props) {
  return (
    <>
      {props.posts.map((post) => (
        <article key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          <div className="posts">
            <img src={post.image} alt="img" />
            <p>{post.paragraphs[0]}</p>
          </div>
        </article>
      ))}
    </>
  );
}
