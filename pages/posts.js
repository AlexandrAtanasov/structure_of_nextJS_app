import {useRouter} from 'next/router'
import { MainLayout } from '../layouts/MainLayout'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Posts({ posts }) {
    // const [posts, setPosts] = useState([])

    // useEffect (() => {
    //     async function load() {
    //         const response = await fetch('http://localhost:4200/posts')
    //         const json = await response.json()
    //         setPosts(json)
    //     }
    //     load()
    // }, [])

    const router = useRouter();
    console.log(router)
    
    return (
        <MainLayout>
            <h1> Post page {router.query.postId}</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                            <a>{post.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </MainLayout>
    )
}

Posts.getInitialProps = async () => {
    const response = await fetch('http://localhost:4200/posts')
    const posts = await response.json()
    return {
        posts
    }
    
}