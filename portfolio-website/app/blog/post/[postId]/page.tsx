import { Post } from '@/app/types';
import '../../../../css/Blog.css';

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
        <div>
            <h2>{String(post)}</h2>
        </div>
    )
}