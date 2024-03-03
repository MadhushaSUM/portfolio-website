import { TagBarParams } from "@/app/types"
import Tag from "./Tag"


export default function TagBar({tagTexts}: Readonly<TagBarParams>){
    return (
        <div className="flex flex-row flex-wrap gap-2">
            {tagTexts.map((text: string, index: number) => {
                return <Tag text={text} key={index}/>
            })}
        </div>
    )
}
