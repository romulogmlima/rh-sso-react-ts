import Keycloak from 'keycloak-js';

const keyCloakInstance = new Keycloak({
    url: 'http://localhost:8080/auth/',
    realm: 'demo',
    clientId: 'test',
});

export default keyCloakInstance;