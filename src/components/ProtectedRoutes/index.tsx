import { Spin } from 'antd'
import { useKeycloak } from 'keycloak-react-web';
import { Navigate } from 'react-router-dom'

export const ProtectedRoutes = () => {
    const {keycloak, initialized} = useKeycloak();

    if(!initialized) {
      return (
        <Spin tip='Loading' size='large' fullscreen />
      )
    }
    
   return keycloak.authenticated ? <Navigate to='/home' /> : <Navigate to='/login' />
}