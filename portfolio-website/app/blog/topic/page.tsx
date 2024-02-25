'use client';

import '../../../css/Blog.css';
import { useSearchParams } from 'next/navigation'

export default function BlogTopic() {
    const searchParams = useSearchParams();
    const topic = searchParams.get('topic');

    return (
        <div className='flex flex-col mr-5'>
            <h2>{`${topic} Posts`}</h2>
        </div>
    )
}