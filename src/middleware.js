import { NextResponse } from "next/server";

export function middleware(request) {
  const hostname = (request.headers.get("host") || "").split(":")[0].toLowerCase();
  const path = request.nextUrl.pathname;
  const demoHost = hostname === "demo1.ceratosystems.com" || hostname === "demo1.localhost";
  const localDemoPath = path === "/demo1" || path.startsWith("/demo1/");
  const headers = new Headers(request.headers);
  headers.set("x-cerato-demo", demoHost || localDemoPath ? "1" : "0");

  if (demoHost && !localDemoPath) {
    const url = request.nextUrl.clone();
    url.pathname = path === "/" ? "/demo1" : `/demo1${path}`;
    return NextResponse.rewrite(url, { request: { headers } });
  }

  return NextResponse.next({ request: { headers } });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|icon.png).*)"],
};
