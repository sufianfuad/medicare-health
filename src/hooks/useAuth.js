import { useContext } from "react";
//
import { AuthContext } from "../contexts/AuthProvide";

const useAuth = () => {
    return useContext(AuthContext)
}

export default useAuth;