import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextApiRequest, response: NextApiResponse) {
    console.log(request.query);
    
    return NextResponse.json({
        req: request
    });
}