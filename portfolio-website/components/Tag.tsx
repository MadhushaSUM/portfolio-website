import { TagParams } from "@/app/types"

const Tag = ({ text }: TagParams) => {
    return (
        <div className="tag">
            {text}
        </div>
    )
}

export default Tag