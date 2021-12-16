import { useEffect, useState } from "react"
import initializeFirebase from "../pages/Login/Firebase/firebase.init";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signOut
} from "firebase/auth";

//initialize auth
initializeFirebase();

const useFirebase = () => {
    // for user
    const [user, setUser] = useState({});
    //for error
    const [authError, setAuthError] = useState('')
    //for loading
    const [isLoading, setIsLoading] = useState(true);

    //from firebase auth
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //for REGISTER
    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                //=========
                const newUser = { email, displayName: name };
                setUser(newUser);
                //send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                //===========
                history.replace('/');
            })
            .catch((error) => {
                console.log(error);
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false))
    }
    //For Login
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                //== redirect
                const destination = location?.state?.from || '/';
                history.replace(destination);
                //--
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    //GOOGLE login
    const signInUsingGoogle = (location, history) => {
        //for loading
        setIsLoading(true);
        //=====
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result)
                const user = result.user;
                // saveUser(user?.email, user?.displayName, 'PUT');
                //===
                setAuthError('');
                //== redirect
                // const destination = location?.state?.from || '/dashboard';
                // history.replace(destination);
            })
            .catch(error => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    //Observed user State
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed;

    }, [])

    //user Logout
    const logOut = (location, history) => {
        //for loading
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                //== redirect
                // const destination = location?.state?.from || '/';
                // history.replace(destination);
            })
            .catch(err => {

            })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        registerUser,
        loginUser,
        signInUsingGoogle,
        isLoading,
        authError,
        logOut
    }

}

export default useFirebase;