import {useRouter} from 'next/router'
import { MainLayout } from '../layouts/MainLayout'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Posts({ posts: serverPosts }) {

    const [posts, setPosts] = useState(serverPosts)
    const router = useRouter()
    useEffect ( () => {
        async function load() {
            const response = await fetch('http://localhost:4200/post')
            const json = await response.json()
            setPosts(json)
        }
        if (!serverPosts) { 
            load()
        }
    }, [] )

    if (!posts) {
        return (
            <MainLayout>
                <p>Loading ...</p>
            </MainLayout>
        )
    }

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

Posts.getInitialProps = async (ctx) => {
    if (!ctx.req) {
        return {
            posts: null
        }
    }
    const response = await fetch('http://localhost:4200/post')
    const posts = await response.json()
    return {
        posts
    }
    
}