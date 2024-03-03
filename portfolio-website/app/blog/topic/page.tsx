'use client';

import { useEffect, useState } from 'react';
import '../../../css/Blog.css';
import { useSearchParams } from 'next/navigation';
import { Post } from '@/app/types';
import PostPreview from '@/components/Blog/PostPreview';
import BreadCrumbs from '@/components/BreadCrumbs';
import Image from 'next/image';

function getPageBody( posts: Post[]) {
    if (posts) {
        if (posts.length === 0) {
            return (
                <div className='flex flex-col items-center'>
                    <Image src='/no-data.png' width={100} height={100} alt='no-data image'/>
                    <p className=''>
                        Sorry No data :/
                    </p>
                </div>
            )
        } else {
            return ( posts.map((post: Post, index: number) => (
                <PostPreview
                  key={post.id}
                  post={post}
                  flipped={index % 2 === 1}
                />
            )))
        }        
    } else {
        return (
            <div>
                <p>Empty Query</p>
            </div>
        )
    }
}

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
            <BreadCrumbs pathArr={[{name: "Home", path: "/"}, {name: "Blog", path: "/blog"}, {name: `${topic}`, path: `/blog/topic?topic=${topic}`}]}/>
            <h2>{`${topic} Posts`}</h2>

            {getPageBody(posts)}
        </div>
    )
}
