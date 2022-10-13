import {initAuth0} from "@auth0/nextjs-auth0";
import config from "./config";

let auth0: any;

const getAuth0 = () => {
  if (!auth0) {
    auth0 = initAuth0(config);
  }
  return auth0;
}

export default getAuth0;
