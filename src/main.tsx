import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import keyCloakInstance from './keyCloakConfig.ts'
import { ConfigProvider } from 'antd'
import { antdTheme } from './theme.ts'
import { KeycloakProvider } from "keycloak-react-web";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <KeycloakProvider client={keyCloakInstance} initOptions={{}}>
      <ConfigProvider theme={antdTheme}>
        {/* <KeyCloakProvider authClient={keyCloakInstance}> */}
          <App />
        {/* </KeyCloakProvider> */}
      </ConfigProvider>
    </KeycloakProvider>
)
