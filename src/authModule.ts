import { PublicClientApplication, LogLevel, CryptoProvider } from "@azure/msal-node";
import type {AuthorizationCodeRequest, AuthorizationUrlRequest, Configuration} from "@azure/msal-node";

const config: Configuration = {
    auth: {
        clientId: "",
        authority: "",
        clientSecret: ""
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