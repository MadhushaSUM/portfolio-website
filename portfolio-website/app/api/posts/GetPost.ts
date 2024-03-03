import { Post } from '@/app/types';
import Posts from '@/data/NewPosts';

export default async function GetPostById(postId: number) {

    const filteredPosts = Posts.filter((post: Post) => {
        return post.id === Number(postId);
    });

    if (filteredPosts.length == 0) {
        return {};
    }

    return filteredPosts[0];
}
