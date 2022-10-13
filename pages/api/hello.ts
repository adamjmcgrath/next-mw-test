import type { NextApiRequest, NextApiResponse } from 'next'
import getAuth0 from "../../lib/auth0";
import { getSession, Session } from "@auth0/nextjs-auth0";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ user?: Session | null, userOwnInstance?: Session | null}>
) {
  const user = await getSession(req, res);
  const userOwnInstance = await (getAuth0().getSession(req, res));

  res.status(200).json({ user, userOwnInstance })
}
