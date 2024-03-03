import { NextRequest, NextResponse } from "next/server";
import Posts from "@/data/NewPosts";

export async function GET(req: NextRequest, res: NextResponse) {    
    const filteredPosts = Posts.filter((post) => {
        return post.topic === req.nextUrl.searchParams.get("topic")
    });
    
    return NextResponse.json({
        data: filteredPosts
    });
}
