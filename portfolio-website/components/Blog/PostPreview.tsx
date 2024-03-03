'use client';

import { PostPrevParams } from "@/app/types"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function PostPreview({ flipped, post }: Readonly<PostPrevParams>) {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/blog/post/${post.id}`);
    }

    return (
        <div className={`flex flex-col ${flipped ? 'sm:flex-row-reverse' : 'sm:flex-row'} glass-card p-3 sm:p-5 gap-5`}>
            <div className="ring-1 sm:w-1/2 relative hidden sm:block">
                <Image
                    src={post.previewImageURL}
                    alt='post thumbnail'
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className="block sm:hidden ring-1">
                <Image
                    src={post.previewImageURL}
                    width='500'
                    height='40'
                    alt="post-image"
                />
            </div>

            <div className="sm:w-1/2 flex flex-col gap-2">
                <h2 className="m-0">{post.title}</h2>
                <p className="text-white line-clamp-4">{ post.brief }</p>
                <button className="ring-1 rounded-lg p-1 mt-2" onClick={handleClick}>Read More</button>
            </div>
        </div>
    )
}