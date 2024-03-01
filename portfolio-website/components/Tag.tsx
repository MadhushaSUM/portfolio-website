'use client';

import { useRouter } from "next/navigation";
import { TagParams } from "@/app/types"

const Tag = ({ text }: TagParams) => {
    const router = useRouter();

    const searchPostsByTag = () => {
        router.push(`/blog/search?searchby=tag&query=${text.slice(1)}`);
    }

    return (
        <div onClick={searchPostsByTag} className="tag cursor-pointer">
            {text}
        </div>
    )
}

export default Tag