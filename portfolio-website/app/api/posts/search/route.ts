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
    } else if (searchby.toLowerCase() === 'all') {
        for (const post of Posts) {
            // Search Title
            if (post.title.toLowerCase().includes(query.toLowerCase())) {
                posts.push(post);
                continue;
            }
            
            // Search Tags
            if (post.tags.includes(`#${query}`)) {
                posts.push(post);
                continue;
            }

            // Search body
            for (const item of post.contentArray) {
                if (item.data?.toLowerCase().includes(query.toLowerCase())) {
                    posts.push(post);
                    break;
                }
            }
        }
    }

    return NextResponse.json(
        {
            data: posts
        }
    );
}
