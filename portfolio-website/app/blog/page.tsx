import RightPanel from '@/components/Blog/RightPanel';
import '../../css/Blog.css';

const page = () => {
    return (
        <div className='background'>
            <div className="flex flex-row w-4/5 h-4/5 mx-auto mt-10">
                <div className="w-3/5">
                    <h2>Recent Posts</h2>
                </div>
                
                <RightPanel />
            </div>
        </div>
    )
}

export default page