import { createContext, useEffect, useState } from "react";
import { verify, progress, fetchWorkingWeight, setLocalWeight, removeLocalWeight} from "../api";

const UserContext = createContext();

function UserProviderWrapper({ children }) {

    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [sessionData, setSessionData] = useState([]);
    const [workingWeight, setWorkingWeight] = useState()

    const getWorkoutHistory = async () => {
        const response = await progress();
        setSessionData(response.data)
    }

    const getWorkingWeight = async () => {
        const response = await fetchWorkingWeight()

        setWorkingWeight(response.data)
        setLocalWeight(response.data)
        console.log('workingWeight', workingWeight)
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
                    const user1 = response.data;
                    console.log("user1", user1)
                    setUser(user1);
                    console.log('returned context user:', user)
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
        removeLocalWeight()
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
            getWorkingWeight,
            workingWeight,
            setWorkingWeight,
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