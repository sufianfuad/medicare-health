import { useEffect, useState } from "react"
import authenticationInit from "../pages/Login/Firebase/firebase.init"
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "firebase/auth";

authenticationInit()
const useFirebase = () => {
    // for user
    const [user, setUser] = useState();
    //for error
    // const [error, setError] = useState("")

    //from firebase auth
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .catch(error => console.log(error.message))
    }
    //observed user LogIn or signOut
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
    }, []);

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