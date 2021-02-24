import React, { useContext, useState, useEffect } from 'react'
import { auth } from "../firebase";



const AuthContext = React.createContext()


export function useAuth() {
    return useContext(AuthContext)
}


export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [Loading, setLoading] = useState(true)

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }
    function logOut() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }
    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }
    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe;
    }, [])


    const value = {
        currentUser,
        login,
        signup,
        logOut,
        resetPassword,
        updateEmail,
        updatePassword
    }


    return <AuthContext.Provider value={value}>{!Loading && children}</AuthContext.Provider>

}
