import { Post } from '@/app/types';
import '../../../../css/Blog.css';
import Image from 'next/image';

async function GetPost(postId:number) {
    const str = `http://localhost:3000/api/posts/${postId}`;
    console.log(str);
    
    const response = await fetch(str, {
        method: "GET"
    });

    const post = await response.json();        
    return post;
}

export default async function singlePost({ params }: { params: { postId: number} }) {
    const response = await GetPost(params.postId);
    const post = response.data as Post;    

    return (
        <div className='flex flex-col mr-5 gap-5'>
            <h2>{post.header}</h2>
            <div className="ring-1 w-full p-5">
            <Image
                src={post.imageURL}
                alt='Post image'
                width={0}
                height={0}
                sizes="50vw"
                style={{ width: '100%', height: 'auto' }} // optional
            />
            </div>
            <p>{post.content}</p>
        </div>
    )
}