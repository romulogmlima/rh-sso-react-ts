import { useKeycloak } from "keycloak-react-web";

const App = () => {
  const {keycloak} = useKeycloak();

  return (
    <div>
      {!keycloak.authenticated && (
        <button onClick={() => keycloak.login()}>Initialize Keycloak and Login</button>
      )}

      {keycloak.authenticated && (
        <div>
          <p>Welcome, {keycloak?.tokenParsed?.preferred_username}!</p>
          <button onClick={() => keycloak.logout()}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default App;