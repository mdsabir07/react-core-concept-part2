import { use } from "react"
import Post from "./Post";

export default function Posts({ postPromise }) {
    const posts = use(postPromise);
    console.log(postPromise);
    return (
        <div>
            <h4>All Posts: {posts.length}</h4>
            {
                posts.map(post=><Post key={post.id} post={post}></Post>)
            }
        </div>
    )
}