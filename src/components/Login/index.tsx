import { useKeycloak } from "keycloak-react-web";

export const Login = () => {
    const {keycloak} = useKeycloak();

    return (
        <div>
          <button onClick={() => keycloak.login()}>Initialize Keycloak and Login</button>
      </div>
    )
}