import { PostPrevParams } from "@/app/types"
import Image from "next/image"

export default function PostPreview( {flipped, imageURL, header, content} : Readonly<PostPrevParams>) {
    return (
        <div className={`flex ${ flipped ? 'flex-row-reverse' : 'flex-row'} space-x-2 glass-card p-5`}>
            <div className="ring-1 w-1/2 relative">
                <Image 
                    src={imageURL} 
                    alt='post thumbnail'
                    layout='fill'
                    objectFit='cover'
                />
            </div>

            <div className="w-1/2 flex flex-col">
                <h2>{header}</h2>
                <p className="text-white">{content}</p>
            </div>
        </div>
    )
}