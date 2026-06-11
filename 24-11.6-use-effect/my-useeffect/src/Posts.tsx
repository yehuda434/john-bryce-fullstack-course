import { useEffect, useState } from 'react'

export default function Posts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState<boolean>(true)

  const [count, setCount] = useState(0)

  async function fetchPosts(){
    try{
        await new Promise((resolve) => setTimeout(resolve, 3000));

        let url = 'https://jsonplaceholder.typicode.com/posts'
        let response = await fetch(url)
        if(!response.ok){
            throw new Error('Failed to fetch posts')
        }
        let data = await response.json()
        setPosts(data)
        console.log(data)
    }
    catch(error){
        console.error('Error fetching posts:', error)
    }
    finally{
        setLoading(false)
    }
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
    {loading ? <h1 style={{ color: 'red' }}>Loading...</h1> : (
        <ul style={{ listStyle: 'none' }}>
            {postList}
        </ul>
    )}

    <button onClick={() => setCount(count + 1)}>Click me</button>
    <p>Count: {count}</p>
    </>
  )
}