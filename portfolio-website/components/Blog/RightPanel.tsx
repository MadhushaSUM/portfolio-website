import AboutMe from "../AboutMe"
import SearchBar from "./SearchBar"

const RightPanel = () => {
    return (
        <div className="border-l-2 flex flex-col pl-5 h-full">
            <h2>Search</h2>
            <SearchBar />

            <h2>Topics</h2>
            <button className="mb-2">
                Game Development
            </button>
            <button className="mb-2">
                Psychology
            </button>
            <button className="mb-2">
                Technology
            </button>       
        </div>
    )
}

export default RightPanel