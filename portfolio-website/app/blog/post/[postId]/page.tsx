import { Post } from '@/app/types';
import '../../../../css/Blog.css';
import Image from 'next/image';
import PostBody from '@/components/Blog/PostBody';

async function GetPost(postId: number) {
    const response = await fetch(`http://localhost:3000/api/posts/${postId}`, {
        method: "GET"
    });

    const post = await response.json();
    return post;
}

export default async function singlePost({ params }: { params: { postId: number } }) {
    const response = await GetPost(params.postId);
    const post = response.data as Post;

    return (
        <div className='flex flex-col mr-5 gap-5'>
            <h2>{post.title}</h2>
            <div className="ring-1 p-5">
                <Image
                    src={post.previewImageURL}
                    alt='Post image'
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }} // optional
                />
            </div>
            <PostBody contentArray={post.contentArray}/>
        </div>
    )
}