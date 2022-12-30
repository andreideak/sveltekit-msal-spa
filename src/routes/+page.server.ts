
import { error, redirect } from '@sveltejs/kit';
import { isUserAuthenticated } from "../stores";
import type { PageServerLoad } from "./$types";

// Sync auth status from stores.ts
let isAuthenticated = false;
isUserAuthenticated.subscribe(value => {
    isAuthenticated = value;
})
 
// If the user is not authenticated, send to /login endpoint
export const load = (async ({}) => {

  if(isAuthenticated === false) {
    throw redirect(301,"/auth/login");
  }
 
  throw error(401, "Unauthenticated");
}) satisfies PageServerLoad;