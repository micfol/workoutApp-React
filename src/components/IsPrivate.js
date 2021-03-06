import { useContext } from "react";
import { UserContext } from "../context/user.context";
import { Navigate } from "react-router-dom";
import Loading from "./utilities/Loading";

export const IsPrivate = ({ children }) => {
    const { isLoggedIn, isLoading } = useContext(UserContext);

    if (isLoading) return (
        <Loading />
    )

    if (!isLoggedIn) {
        return <Navigate to="/signin" />
    } else {
        return children;
    }

}