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

//initialize auth
authenticationInit()

const useFirebase = () => {
    // for user
    const [user, setUser] = useState();
    //for error
    const [error, setError] = useState("")

    //from firebase auth
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .catch(error => setError(error.message))
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

    //for email and password
    const handleUserRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                console.log(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const handleUserLogIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                console.log(result.user)
            })
    }

    // user logout
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    return {
        user,
        handleUserRegister,
        handleUserLogIn,
        signInUsingGoogle,
        logOut
    }

}

export default useFirebase;