import { createContext, useEffect, useState } from "react";
import Keycloak from 'keycloak-js';

export type KeyCloakContextProps = {
    signIn: () => void;
    authenticated: boolean;
    keyCloakInstance: Keycloak | undefined;
}

type KeyCloakProviderProps = {
    children: React.ReactNode;
    authClient: Keycloak
}

export const KeyCloakContext = createContext<KeyCloakContextProps>({} as KeyCloakContextProps)

export const KeyCloakProvider = ({children, authClient}: KeyCloakProviderProps) => {
    const [authenticated, setAuthenticated] = useState<boolean>(false);
    const [keyCloak, _] = useState<Keycloak>(authClient);

    useEffect(() => {
       const init = async () => {
          const result = await keyCloak.init({ 
            onLoad: 'check-sso', 
            // redirectUri: 'http://localhost:5173'
          });
          setAuthenticated(result)
       }
       init()
    }, [keyCloak])

      const signIn = async () => {
        try {      
          await keyCloak.login();

          } catch (error) {
            console.error('Authentication failed', error)
          }
      }

    return (
        <KeyCloakContext.Provider value={{signIn, authenticated, keyCloakInstance: keyCloak}}>
            {children}
        </KeyCloakContext.Provider>
    )
}
