import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(); 

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children}) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

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

     // to get the user data - currently logged in user data
    const userAuthentication = async() => {
        try {
            const response = await fetch("https://students-way-b.onrender.com/api/auth/user", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if(response.ok) {
                const data = await response.json();
                console.log("user data", data);
                setUser(data);
            }
        } catch (error) {
            console.error("Error fetching data");
        }  finally {
            setLoading(false); 
        }
    }


    useEffect(() => {
        userAuthentication();
    }, []);

    return <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user, loading }}>
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