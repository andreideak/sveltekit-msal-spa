<script lang="ts">
  import { onMount } from 'svelte';
  import { isUserAuthenticated } from '../stores';

  // DEBUG
  let config = {
    authority: import.meta.env.VITE_MSAL_AUTHORITY,
    redirect_uri: import.meta.env.VITE_MSAL_REDIRECT_URI,
    client_id: import.meta.env.VITE_MSAL_CLIENT_ID,
    client_secret: import.meta.env.VITE_MSAL_CLIENT_SECRET,
  };
  let tokenEncoded = '';
  let tokenDecoded = '';
  // /DEBUG


  onMount(async () => {

  });
</script>

<!-- DEBUG -->
<h1>SvelteKit MSAL.js SPA</h1>

<h2>Configuration</h2>
<p>Authority: {config.authority}</p>
<p>RedirectUri: {config.redirect_uri}</p>
<p>ClientId: {config.client_id}</p>
<p>ClientSecret: {config.client_secret}</p>

<h2>Data</h2>
<p>User Authenticated: {$isUserAuthenticated}</p>
<p>Encoded Token: {tokenEncoded}</p>
<p>Decoded Token: {tokenDecoded}</p>

<!-- /DEBUG -->