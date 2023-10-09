import {Navigate} from 'react-router-dom';

type AuthCheckerProps ={
    children: JSX.Element;
    isAuth: boolean;
}

function AuthChecker({ children, isAuth}: AuthCheckerProps) {
  return (
    isAuth ? children : <Navigate to={'/login'}/>
  );
}

export default AuthChecker;
