import Posts from '@/data/NewPosts';
import { NextResponse } from 'next/server';

export async function GET() {

    const first_posts = Posts.slice(0,5);

    return NextResponse.json({
        data: first_posts
    });
}