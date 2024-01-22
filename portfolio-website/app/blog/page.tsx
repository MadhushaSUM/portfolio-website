
const page = () => {
    return (
        <div className='background'>
            <div className="flex flex-row w-4/5 mx-auto mt-10 text-white">
                <div className="w-3/5 h-4/5">
                    Recent
                </div>
                <div className="w-2/5 h-4/5">
                    Topics
                    <ul className="ml-10">
                        <li># Programming</li>
                        <li># Game Development</li>
                        <li># Psychology</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default page