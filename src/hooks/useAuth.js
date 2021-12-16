// import useContext
import { useContext } from "react";
//import Auth context
import { AuthContext } from "../contexts/AuthProvider";

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
}

export default useAuth;