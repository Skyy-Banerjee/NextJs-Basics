import { NextResponse } from "next/server";

export function middleware(request:Request){
    console.log('middleware testing! 🛠️');
    // return Response.json({msg: 'middleware alert!'});
    return NextResponse.redirect(new URL('/',request.url))
    
}

export const config = {
    // matcher: '/about',
    matcher: ['/about/:path*', '/tours/:path*'],
}