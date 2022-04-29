import { NavLink } from "react-router-dom";
import { UserContext } from "../context/user.context";
import { useContext } from 'react';


export const Navbar = () => {
    const { isLoggedIn, user, logoutUser } = useContext(UserContext);
    return (
        <nav>
            <img src="/PlaceholderLogo.png" style={{maxHeight: 100}} className="navLogo" alt="StongLiftr Logo"/>
            <div>
                <div>
                    <NavLink to="/">Home</NavLink> 
                </div>
                {!isLoggedIn && 
                    <>
                        <div>
                            <NavLink to="/login">Login</NavLink>
                        </div>
                        <div>
                            <NavLink to="/signup">Signup</NavLink> 
                        </div>
                    </>}

                
                {isLoggedIn && 
                <>
                  <div>
                        <NavLink to="/workout-entry">Start Workout</NavLink> 
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

    // eslint-disable-next-line no-lone-blocks
    {/* // const { isLoggedIn, user, logoutUser } = useContext(UserContext);
    // return (
    //     <nav>
    //         <div>
    //             <NavLink
    //                 className={({isActive}) => (isActive ? "nav-active" : "nav-inactive")} to="/">
    //                 Projects
    //             </NavLink>
    //         </div>
            
    //         {!isLoggedIn && <>
    //         <div>
    //             <NavLink
    //                 className={({isActive}) => (isActive ? "nav-active" :  "nav-inactive")} to="/signup">
    //                 Signup
    //             </NavLink>
    //         </div>
    //         <div>
    //             <NavLink
    //                 className={({isActive}) => (isActive ? "nav-active" :  "nav-inactive")} to="/login">
    //                 Login
    //             </NavLink>
    //         </div>
    //         </>}
    //         {isLoggedIn && 
    //             <>
    //             <div>
    //                 <NavLink
    //                     className={({isActive}) => (isActive ? "nav-active" :  "nav-inactive")} to="/projects/add">
    //                     Add Project
    //                 </NavLink>
    //             </div>
    //                 <div>Welcome {user && user.username}</div>
    //                 <button onClick={logoutUser}>Logout</button>
    //             </>}
            
    //     </nav>
    // ) */}
