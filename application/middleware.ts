import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  if (process.env.SITE_DOWN !== "true") return NextResponse.next();

  const { pathname, searchParams } = req.nextUrl;

  // Optional owner bypass: visit /?preview=YOUR_SECRET once to get a cookie
  const secret = process.env.BYPASS_SECRET;
  if (secret && searchParams.get("preview") === secret) {
    const res = NextResponse.redirect(new URL("/", req.url));
    res.cookies.set("bypass", secret, { httpOnly: true, path: "/" });
    return res;
  }
  if (secret && req.cookies.get("bypass")?.value === secret) {
    return NextResponse.next();
  }

  // Let static assets through so the down page can use them
  if (pathname.startsWith("/_next") || pathname === "/favicon.ico") {
    return NextResponse.next();
  }

  const html = `<!doctype html>
<html><head><meta charset="utf-8"><title>Service Unavailable</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  body{margin:0;height:100vh;display:grid;place-items:center;font-family:system-ui,sans-serif;background:#0b0b0f;color:#e5e5e5;text-align:center}
  h1{font-size:4rem;margin:0}
  p{color:#888;max-width:420px}
</style></head>
<body><div>
  <h1>503</h1>
  <h2>Service Unavailable</h2>
  <p>The server is temporarily unable to handle your request. Please try again later.</p>
</div></body></html>`;

  return new NextResponse(html, {
    status: 503,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Retry-After": "3600",
      "Cache-Control": "no-store",
    },
  });
}

export const config = {
  matcher: "/((?!_next/static|_next/image).*)",
};
