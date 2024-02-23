import PostPreview from '@/components/Blog/PostPreview';
import '../../css/Blog.css';
import { Post } from '../types';

async function getRecentPosts() {
    const response = await fetch('http://localhost:3000/api/posts/recents', {
        method: "GET",
    });

    const posts = await response.json();
    return posts;
}

export default async function page() {

    const response = await getRecentPosts();
    const posts = response.data;


    return (
        <div className='flex flex-col mr-5'>
            <h2>Recent Posts</h2>

            {posts.map((post: Post, index: number) => {
                return (
                    <PostPreview
                        key={post.id}
                        post={post}
                        flipped={post.id % 2 == 1}
                    />
                )
            })}
        </div>
    )
}
