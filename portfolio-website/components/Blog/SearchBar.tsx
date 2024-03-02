import { useBlogSearchContext } from "@/context/BlogSearchContext"
import { ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { debounce } from "lodash";

export default function SearchBar(){
    const router = useRouter();
    const { searchText, setSearchText } = useBlogSearchContext();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
        router.push('/blog/search?searchby=all');
    }

    return (
        <div>
            <input onChange={debounce(handleChange, 1000)} type="text" placeholder="Search keywords, tags, and topics" className="w-fit rounded-full ring-1 px-5 text-white font-thin italic bg-transparent"/>
        </div>
    )
}