import Posts from '@/data/NewPosts';
import { NextRequest, NextResponse } from 'next/server';

export function GET(req: NextRequest, res: NextResponse) {
    const searchby = req.nextUrl.searchParams.get('searchby');
    const query = req.nextUrl.searchParams.get('query');

    if (!query || !searchby) {
        return NextResponse.json("Not enough params");
    }

    const posts = [];
    if (searchby.toLowerCase() === 'tag') {

        for (const post of Posts) {
            if (post.tags.includes(`#${query}`)) {
                posts.push(post);
            }
        }
    }

    return NextResponse.json(
        {
            data: posts
        }
    );
}
