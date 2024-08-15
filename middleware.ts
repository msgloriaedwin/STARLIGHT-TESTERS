import cookie from "cookie";
import { NextRequest, NextResponse } from "next/server";

const parseJwt = (token: string) => {
  try {
    return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
  } catch (e) {
    return null;
  }
};
export function middleware(req: NextRequest) {
  const cookies = cookie.parse(req.headers.get("Cookie") || "");
  const token = cookies.token;
  const tokenFromOauth = req.cookies.get("token");

  let tokenData;

  if (token) {
    tokenData = parseJwt(token.toString());
  }

  if (tokenFromOauth) {
    tokenData = parseJwt(tokenFromOauth.toString());
  }
  console.log(tokenData)

  if (req.nextUrl.pathname.startsWith("/")) {
    const oAuthToken = req.nextUrl.searchParams.get("access_token") || "";

    if (oAuthToken) {
      const response = NextResponse.next();

      response.cookies.set({
        name: "token",
        value: oAuthToken.toString(),
        maxAge: 60 * 60 * 24 * 7,
      });

      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/login", "/auth/register"],
};