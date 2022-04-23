import { login } from "../api";
import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { UserContext } from "../context/user.context";

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // const { storeToken, authenticateUser } = useContext(UserContext);

    const navigate = useNavigate();

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const response = await login({ username, password });
        // storeToken(response.data.authToken);
        // authenticateUser();
        navigate("/");
    };

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmitForm}>
                <label>Username</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">Login</button>
            </form>
            <p>Don't have an account?</p>
            <Link to={"/signup"}>Signup</Link>
        </>
    );
}