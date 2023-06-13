import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();




const AuthProvider = () => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [photo, setPhoto] = useState(null);
    const [name, setName] = useState(null);

    const authInfo = {
        user,
        setUser,
        createUser,
        updateInfo,
        googleSignIn,
        loginWithEmail,
        logOut,
        loading,
        photo,
        name,
        setLoading,
    };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;