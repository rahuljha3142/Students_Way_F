import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(); 

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children}) => {
  const [token, setToken] = useState("");

    const storeTokenInLS = (serverToken) => {
        return localStorage.setItem("token", serverToken);
    };

    //   this is the get the value in either true or false in the original state of token
    let isLoggedIn = !!token;
    console.log("token", token);
    console.log("isLoggedin ", isLoggedIn);

    //   to check whether is loggedIn or not
    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    };

    return <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser }}>
        {children}
    </AuthContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if(!authContextValue) {
        throw new Error("useAuth used outside of the provider");
    }
    return authContextValue;
}