import { Link } from "react-router-dom"
import { posts } from "./data/posts"

export default function Posts() {
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  )
}