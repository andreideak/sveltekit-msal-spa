import { writable } from "svelte/store";

export const isUserAuthenticated = writable(false);
export const username = writable("");