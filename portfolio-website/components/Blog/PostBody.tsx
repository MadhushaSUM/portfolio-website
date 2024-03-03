import { PostContentItemTypes } from "@/app/enums";
import { PostContentItem } from "@/app/types";
import Image from "next/image";

function GetContentItem(contentItem: Readonly<PostContentItem>) {
    if (contentItem.type == PostContentItemTypes.SUB_HEADER) {
        
        return (
            <div>
                <br />
                <h3>{ contentItem.data }</h3>
            </div>
        )
    }
    else if (contentItem.type == PostContentItemTypes.TEXT) {

        return (
            <span>{ contentItem.data }</span>
        )

    } else if (contentItem.type == PostContentItemTypes.BOLD) {

        return (
            <span className="font-bold">{ contentItem.data }</span>
        )

    } else if (contentItem.type == PostContentItemTypes.ITALIC) {

        return (
            <span className="italic">{ contentItem.data }</span>
        )

    } else if (contentItem.type == PostContentItemTypes.BOLD_ITALIC) {

        return (
            <span className="italic font-bold">{ contentItem.data }</span>
        )

    } else if (contentItem.type == PostContentItemTypes.PARAGRAPH_BREAK) {

        return (
            <div>
                <br />
            </div>            
        )    

    } else if (contentItem.type == PostContentItemTypes.IMAGE) {
        if (contentItem.data) {

            return (
                <div>
                    <div className="ring-1 p-2">
                        <Image
                            src={ contentItem.data }
                            alt='Post image'
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                    <br />
                </div>
            )

        }
    }
}

export default function PostBody({ contentArray }: Readonly<{ contentArray: PostContentItem[] }>) {

    return (
        <div>
            {contentArray.map((item, index) => (
                (
                    <span
                        key={index}>
                        {GetContentItem(item)}
                    </span>
                )
            ))}
        </div>
    )
}
