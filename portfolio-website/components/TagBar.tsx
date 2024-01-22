import { TagBarParams } from "@/app/types"
import Tag from "./Tag"


const TagBar = ({tagTexts}: TagBarParams) => {
    return (
        <div className="flex flex-row">
            {tagTexts.map((text: string) => {
                return <Tag text={text}/>
            })}
        </div>
    )
}

export default TagBar