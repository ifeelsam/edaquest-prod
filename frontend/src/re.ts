// import { NextRequest, NextResponse } from 'next/server';
// import { getUser } from '@privy-io/server-auth';

// export async function middleware(request :NextRequest) {
//   const idToken = request.cookies.get('privy-id-token')?.value;

//   if (!idToken) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

//   try {
//     await getUser({ idToken });
//     return NextResponse.next();
//   } catch (error) {
//     console.error('Error verifying identity token:', error);
//     return NextResponse.redirect(new URL('/login', request.url));
//   }
// }

// export const config = {
//   matcher: ['/protected/:path*'],
// };