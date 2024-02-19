'use client';

import { PostPrevParams } from "@/app/types"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function PostPreview({ flipped, imageURL, header, content }: Readonly<PostPrevParams>) {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/blog/post/${header}`);
    }

    return (
        <div className={`flex ${flipped ? 'flex-row-reverse' : 'flex-row'} glass-card p-5`} onClick={handleClick}>
            <div className="ring-1 w-1/2 relative mx-2">
                <Image
                    src={imageURL}
                    alt='post thumbnail'
                    layout='fill'
                    objectFit='cover'
                />
            </div>

            <div className="w-1/2 flex flex-col mx-2">
                <h2>{header}</h2>
                <p className="text-white">{content}</p>
            </div>
        </div>
    )
}