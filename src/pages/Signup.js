import { signup } from "../api";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export const Signup = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        await signup({ username, firstName, lastName, email, password });
        navigate("/");
    };

    return (
        <>
            <h1>Signup</h1>
            <form onSubmit={handleSubmitForm}>
                <label>Username</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

                <label>First Name</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

                <label>Last Name</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />

                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account?</p>
            <Link to={"/login"}>Login</Link>
        </>
    );
}