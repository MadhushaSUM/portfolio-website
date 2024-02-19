import '../../../../css/Blog.css';

export default function singlePost({ params }: { params: { postId: string} }) {
    return (
        <div>
            <h2>{params.postId}</h2>
        </div>
    )
}