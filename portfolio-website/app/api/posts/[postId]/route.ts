import { Post } from '@/app/types';
import Posts from '@/data/NewPosts';
import { NextRequest, NextResponse } from 'next/server';

export function GET(req: NextRequest, { params } : any) {
    const { postId } = params;

    const filteredPosts = Posts.filter((post: Post) => {
        return post.id === Number(postId);
    });

    if (filteredPosts.length == 0) {
        return NextResponse.json("No Data");
    }

    return NextResponse.json(JSON.stringify({
        data: filteredPosts[0]
    }))
}
