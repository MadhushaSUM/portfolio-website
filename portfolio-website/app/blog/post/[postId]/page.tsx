import { Post } from '@/app/types';
import '../../../../css/Blog.css';
import Image from 'next/image';
import PostBody from '@/components/Blog/PostBody';
import PostDetails from '@/components/Blog/PostDetailes';
import BreadCrumbs from '@/components/BreadCrumbs';
import PostTagBar from '@/components/Blog/PostTagBar';
import GetPostById from '@/app/api/posts/GetPost'

async function GetPost(postId: number) {
    return await GetPostById(postId);
}

export default async function singlePost({ params }: { params: { postId: number } }) {
    const response = await GetPost(params.postId);
    const post = response as Post;

    return (
        <div className='flex flex-col sm:mr-5 gap-10'>
            <BreadCrumbs pathArr={[{name: "Home", path: "/"}, {name: "Blog", path: "/blog"}, {name: `${post.topic}`, path: `/blog/topic?topic=${post.topic}`}, {name: `${post.title}`, path: `/blog/${post.id}`}]}/>
            <div>
                <h2>{post.title}</h2>
                <PostTagBar tagTexts={post.tags}/>
            </div>
            <div className="ring-1 p-2">
                <Image
                    src={post.previewImageURL}
                    alt='Post image'
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }} // optional
                />
            </div>
            <PostDetails Author={post.author} CreatedDate={post.createdDate}/>
            
            <PostBody contentArray={post.contentArray}/>
        </div>
    )
}