import {Navigate} from 'react-router-dom';
import { AuthorizationStatuses } from '../types/state';

type AuthCheckerProps ={
    children: JSX.Element;
    isAuth: AuthorizationStatuses;
}

function AuthChecker({ children, isAuth}: AuthCheckerProps) {
  return (
    isAuth === AuthorizationStatuses.authorized ? children : <Navigate to={'/login'}/>
  );
}

export default AuthChecker;
