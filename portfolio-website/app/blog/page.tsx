import PostPreview from '@/components/Blog/PostPreview';
import '../../css/Blog.css';
import { Post } from '../types';
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

async function getRecentPosts() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/recents`, {
        method: "GET",
    });

    const posts = await response.json();
        
    return JSON.parse(posts);
}

export default async function page() {

    const response = await getRecentPosts();
    const posts = response.data;


    return (
        <div className='flex flex-col sm:mr-5 gap-5'>
            <BreadCrumbs pathArr={[{name: "Home", path: "/"}, {name: "Blog", path: "/blog"}]}/>
            <h2>Recent Posts</h2>

            {getPageBody(posts)}
        </div>
    )
}
