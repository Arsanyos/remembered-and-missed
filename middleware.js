import { NextResponse } from "next/server";

export function middleware(request) {
  let cookie = request.cookies.get("user");

  //   console.log(cookie, "COOKIE");
  //   console.log(request);
 
  //   return response;
}
