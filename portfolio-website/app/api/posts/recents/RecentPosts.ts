import Posts from '@/data/NewPosts';

export default function RecentPosts() {

    const first_posts = Posts.slice(0,5);

    return first_posts;
}