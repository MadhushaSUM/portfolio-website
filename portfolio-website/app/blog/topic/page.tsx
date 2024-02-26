'use client';

import { useEffect, useState } from 'react';
import '../../../css/Blog.css';
import { useSearchParams } from 'next/navigation';
import { Post } from '@/app/types';
import PostPreview from '@/components/Blog/PostPreview';

export default function BlogTopic() {
    const searchParams = useSearchParams();
    const topic = searchParams.get('topic');
    const [posts, setPosts] = useState<Post[]>([]);

    const fetchPosts = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/posts/topic?topic=${topic}`);
            if (!response.ok) {
                throw new Error('Failed to fetch posts');
            }
            const data = await response.json();
            return data.data;
        } catch (error) {
            console.error('Error fetching posts:', error);
            return [];
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedPosts = await fetchPosts();
                setPosts(fetchedPosts);
            } catch (error) {
                // Error handling is done in fetchPosts function
            }
        };
    
        if (topic) {
            fetchData();
        } else {
            setPosts([]);
        }
    }, [topic]);

    return (
        <div className='flex flex-col mr-5'>
            <h2>{`${topic} Posts`}</h2>

            {posts.map((post: Post, index: number) => (
                <PostPreview
                    key={post.id}
                    post={post}
                    flipped={index % 2 === 1}
                />
            ))}
        </div>
    )
}
