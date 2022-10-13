import type {GetServerSideProps, NextPage} from 'next'
import {Claims} from "@auth0/nextjs-auth0";
import getAuth0 from "../lib/auth0";

const Home: NextPage<{ profile?: Claims }> = ({ profile }) => {
  return (
    <pre>{JSON.stringify(profile, null, 2)}</pre>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      profile: (await (getAuth0().getSession(ctx.req, ctx.res)))?.user
    }
  }
}
