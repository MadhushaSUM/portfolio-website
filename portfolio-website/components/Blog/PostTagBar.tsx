import { TagBarParams } from "@/app/types"
import PostTag from "./PostTag"

export default function PostTagBar({tagTexts}: TagBarParams){
    return (
        <div className="flex flex-row gap-2 flex-wrap">
            {tagTexts.map((text: string, index: number) => {
                return <PostTag text={text} key={index}/>
            })}
        </div>
    )
}