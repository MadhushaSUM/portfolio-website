'use client';

import { useEffect, useState } from 'react';
import '../../../css/Blog.css';
import { useSearchParams } from 'next/navigation';
import { Post } from '@/app/types';
import PostPreview from '@/components/Blog/PostPreview';

export default function BlogTopic() {
    const searchParams = useSearchParams();
    const topic = searchParams.get('topic');
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const response = await fetch(`http://localhost:3000/api/posts/topic?topic=${topic}`, {
        method: "GET",
    });

        const posts = await response.json();                
        return posts.data;
    }

    useEffect(() => {
        const fetchData = async () => {
            const fetchedPosts = await fetchPosts();
            setPosts(fetchedPosts);
        };
    
        fetchData();
        console.log(posts);
        
    }, []);

    return (
        <div className='flex flex-col mr-5'>
            <h2>{`${topic} Posts`}</h2>

            {posts.map((post: Post, index: number) => {
                return (
                    <PostPreview
                        key={post.id}
                        post={post}
                        flipped={index % 2 == 1}
                    />
                )
            })}
        </div>
    )
}