import { createContext, useEffect, useState } from "react";
import { verify, progress } from "../api";

const UserContext = createContext();

function UserProviderWrapper({ children }) {

    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [sessionData, setSessionData] = useState([]);

    const getWorkoutHistory = async () => {
        const response = await progress(user._id);
        setSessionData(response.data)
    }


    const storeToken = (token) => {
        localStorage.setItem("authToken", token);
    };

    const removeToken = () => {
        localStorage.removeItem("authToken");
    };

    const authenticateUser = () => {
        const storeToken = localStorage.getItem("authToken");

        if (storeToken) {
            //verifies if the token is still valid
            (async () => {
                try {
                    const response = await verify(storeToken);
                    const user = response.data;
                    // console.log('returned context user:', user)
                    setUser(user);
                    setIsLoggedIn(true);
                    setIsLoading(false);
                } catch (e) {
                    setUser(null);
                    setIsLoggedIn(false);
                }
                finally {
                    setIsLoading(false);
                }
            })()

        } else {
            setUser(null);
            setIsLoggedIn(false);
            setIsLoading(false);
        }
    };

    const logoutUser = () => {
        removeToken();
        authenticateUser();
    };

    // Allows the user to stay logged in when refreshing the page
    useEffect(() => {
        authenticateUser();
    }, []);

    return (
        <UserContext.Provider value={{
            user,
            setUser,
            sessionData,
            setSessionData,
            getWorkoutHistory,
            isLoggedIn,
            storeToken,
            authenticateUser,
            logoutUser,
            isLoading
        }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserProviderWrapper, UserContext };