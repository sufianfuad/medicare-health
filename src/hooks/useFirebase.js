import { useEffect, useState } from "react"
import authenticationInit from "../pages/Login/Firebase/firebase.init"
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut
} from "firebase/auth";

authenticationInit()
const useFirebase = () => {

    const [user, setUser] = useState();
    const auth = getAuth();

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                // console.log(result.user)
                setUser(result.user)
            })
    }
    //observed
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        })
        return () => unsubscribed;
    }, [])
    // user logout
    const logOut = () => {
        signOut(auth)
            .then(() => {

            })
    }

    return {
        user,
        signInUsingGoogle,
        logOut
    }

}

export default useFirebase;