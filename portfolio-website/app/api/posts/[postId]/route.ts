import { Post } from '@/app/types';
import Posts from '@/data/BlogPosts';
import { NextRequest, NextResponse } from 'next/server';

export function GET(req: NextRequest, { params } : any) {
    const { postId } = params;

    const filteredPosts = Posts.filter((post: Post, index: number) => {
        return post.id === Number(postId);
    });

    if (filteredPosts.length == 0) {
        return NextResponse.json("No Data");
    }

    return NextResponse.json({
        data: filteredPosts[0]
    })
}
