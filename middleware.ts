import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/middleware';
import getAuth0 from "./lib/auth0-mw";
import {NextMiddleware} from "next/server";

export default (...args: Parameters<NextMiddleware>) => {
  const [req] = args;
  const { pathname } = req.nextUrl;
  switch (pathname) {
    case '/profile-mw':
      return withMiddlewareAuthRequired()(...args);
    case '/profile-mw-own-instance':
      return getAuth0().withMiddlewareAuthRequired()(...args);
  }
}

export const config = {
  matcher: ['/profile-mw', '/profile-mw-own-instance'],
};
