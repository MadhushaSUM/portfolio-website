'use client';

import { useEffect, useState } from 'react';
import '../../../css/Blog.css';
import { useSearchParams } from 'next/navigation';
import { Post } from '@/app/types';
import PostPreview from '@/components/Blog/PostPreview';
import BreadCrumbs from '@/components/BreadCrumbs';
import { useBlogSearchContext } from '@/context/BlogSearchContext';

export default function SearchResults() {
    const searchParams = useSearchParams();
    const searchby = searchParams.get('searchby');
    const query = searchParams.get('query');
    const [posts, setPosts] = useState<Post[]>([]);
    const { searchText, setSearchText } = useBlogSearchContext();


    const fetchPosts = async () => {
        try {
            if (searchby === 'tag') {
                const response = await fetch(`http://localhost:3000/api/posts/search?searchby=${searchby}&query=${query}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                const data = await response.json();
                return data.data;
            } else {
                const response = await fetch(`http://localhost:3000/api/posts/search?searchby=${searchby}&query=${searchText}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                const data = await response.json();
                return data.data;
            }
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
    
        if (searchby) {
            fetchData();
        } else {
            setPosts([]);
        }
    }, [searchby, query, searchText]);

    return (
        <div className='flex flex-col mr-5'>
            <BreadCrumbs pathArr={[{name: "Home", path: "/"}, {name: "Blog", path: "/blog"}, {name: `Search Results: ${query ?? searchText}`, path: `/blog/search?searchby=${searchby}&query=${query}`}]}/>
            <h2>{ searchby === 'tag' ? `Search Results for: #${query}` : `Search Results for: ${searchText}`}</h2>

            {posts && posts.map((post: Post, index: number) => (
                <PostPreview
                    key={post.id}
                    post={post}
                    flipped={index % 2 === 1}
                />
            ))}
        </div>
    )
}
