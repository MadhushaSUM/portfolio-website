'use client';

import SearchBar from "./SearchBar";
import { useRouter } from "next/navigation";


export default function RightPanel() {
    const router = useRouter();

    const handleClicks = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        router.push("/blog/topic?topic="+e.currentTarget.name);          
    }  

    return (
        <div className="flex flex-col sm:pl-5 h-full items-center sm:items-start">
            <h2>Search</h2>
            <SearchBar />

            <h2>Topics</h2>
            <button name="Game Development" onClick={handleClicks} className="mb-2">
                Game Development
            </button>
            <button name="Psychology" onClick={handleClicks} className="mb-2">
                Psychology
            </button>
            <button name="Technology" onClick={handleClicks} className="mb-2">
                Technology
            </button>       
        </div>
    )
}

