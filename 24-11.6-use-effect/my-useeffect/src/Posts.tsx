import { useEffect, useState } from 'react'

export default function Posts() {
  const [posts, setPosts] = useState([])

  const [count, setCount] = useState(0)

  async function fetchPosts(){
        let url = 'https://jsonplaceholder.typicode.com/posts'
        let response = await fetch(url)
        let data = await response.json()
        setPosts(data)
        console.log(data)
    }
    useEffect(()=>{
        fetchPosts()
    }, [count])

    let postList = posts.map((post:any)=>{
        return <li key={post.id}>{post.title}</li>
    })
  return (
    <>
    <h1>My Posts</h1>
    <ul>
        {postList}
    </ul>

    <button onClick={() => setCount(count + 1)}>Click me</button>
    <p>Count: {count}</p>
    </>
  )
}