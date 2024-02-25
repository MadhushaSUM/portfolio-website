import '@/css/Blog.css';

export default function PostDetails({ Author, CreatedDate }: { Author: string, CreatedDate: string }) {
    return (
        <div className="flex flex-row justify-end gap-2">
            <div className='flex flex-col'>
                <span className='PostDetails'>Author :</span>
                <span className='PostDetails'>Created on :</span>
            </div>
            <div className='flex flex-col'>
                <span className='PostDetailsValues'>{ Author }</span>
                <span className='PostDetailsValues'>{ CreatedDate }</span>
            </div>         
        </div>
    )
}