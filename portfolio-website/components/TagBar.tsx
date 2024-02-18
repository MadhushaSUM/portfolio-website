import { TagBarParams } from "@/app/types"
import Tag from "./Tag"


const TagBar = ({tagTexts}: TagBarParams) => {
    return (
        <div className="flex flex-row">
            {tagTexts.map((text: string, index: number) => {
                return <Tag text={text} key={index}/>
            })}
        </div>
    )
}

export default TagBar