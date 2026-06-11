import { Link, useParams } from "react-router-dom"
import { posts } from "./data/posts"


//<Route path="/posts/:id" element={<Post />} />

//https://127.0.0.1:5173/posts/5
export default function Post() {
  const { id } = useParams()//{id: '1'} get the id from the url. posts/1
 //alert(id)
  const post = posts.find((p) => p.id === Number(id))

  if (!post) {
    return (
      <div>
        <h1>Post not found</h1>
        <Link to="/posts">Back to Posts</Link>
      </div>
    )
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <Link to="/posts">Back to Posts</Link>
    </div>
  )
}
