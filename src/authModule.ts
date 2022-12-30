import { VITE_MSAL_CLIENT_ID } from "$env/static/private";
import { ConfidentialClientApplication, LogLevel, CryptoProvider } from "@azure/msal-node";
import type {AuthorizationCodeRequest, AuthorizationUrlRequest, Configuration} from "@azure/msal-node";

const config: Configuration = {
    auth: {
        clientId: import.meta.env.VITE_MSAL_CLIENT_ID,
        authority: import.meta.env.VITE_MSAL_AUTHORITY,
        clientSecret: import.meta.env.VITE_MSAL_CLIENT_SECRET,
    },
    system: {
        loggerOptions: {
            loggerCallback(loglevel: LogLevel, message: string, containsPii: boolean) {
                console.log(message);
            },
            piiLoggingEnabled: false,
            logLevel: LogLevel.Verbose,
        }
    }
}

const tokenConfig = {
    "request":
    {
        "authCodeUrlParameters": {
            "scopes": ["user.read"],
            "redirectUri": "http://localhost:7301/auth/callback"
        },
        "tokenRequest": {
            "redirectUri": "http://localhost:3000/auth/callback",
            "scopes": ["user.read"]
        }
    },
    "resourceApi":
    {
        "endpoint": "https://graph.microsoft.com/v1.0/me"
    }
};

async function createClient() {
    return new ConfidentialClientApplication(config);
}




const auth = {
    createClient,
    tokenConfig
}

export default auth;