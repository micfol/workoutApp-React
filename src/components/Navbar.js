import { NavLink } from "react-router-dom";
import { UserContext } from "../context/user.context";
import { useContext } from 'react';


export const Navbar = () => {
    const { isLoggedIn, user, logoutUser } = useContext(UserContext);
    return (
        <nav>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
            <div>
                <div>
                    <NavLink to="/">Home</NavLink> 
                </div>
                {!isLoggedIn && 
                    <>
                        <div>
                            <NavLink to="/sing-in">Sign In</NavLink>
                        </div>
                        <div>
                            <NavLink to="/signup">Signup</NavLink> 
                        </div>
                        
                    </>}
                <div>
                    <NavLink to="/education">Education Library</NavLink> 
                </div>
                
                {isLoggedIn && 
                <>
                  <div>
                        <NavLink to="/exerciseEntry">Start Workout</NavLink> 
                    </div>

                    <div>
                        <NavLink to="/addexercise">Add Exercise</NavLink> 
                    </div>  
                    <div>Welcome {user && user.username}</div>
                    <button onClick={logoutUser}>Logout</button>
                </>}
                
            </div>
        </nav>
    )
};