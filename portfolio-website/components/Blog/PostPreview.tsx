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
        <div className={`flex ${flipped ? 'flex-row-reverse' : 'flex-row'} glass-card p-5`}>
            <div className="ring-1 w-1/2 relative mx-2">
                <Image
                    src={post.previewImageURL}
                    alt='post thumbnail'
                    layout='fill'
                    objectFit='cover'
                />
            </div>

            <div className="w-1/2 flex flex-col mx-2">
                <h2>{post.title}</h2>
                <p className="text-white line-clamp-4">{ post.brief }</p>
                <button className="ring-1 rounded-lg p-1 mt-2" onClick={handleClick}>Read More</button>
            </div>
        </div>
    )
}