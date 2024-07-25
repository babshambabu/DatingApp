import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../assets/datingLogo.jpg";
import { AuthContext } from "../AuthContext";


const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const handleLogout = async (e) => {
    e.preventDefault();
      try {
      await axios.get("http://localhost:3001/auth/logout", {
        withCredentials: true,
      });
      localStorage.removeItem('token'); // Remove the token from local storage
      logout();
        navigate("/login");
      
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="navbar">
      <span className="logo">
        <img src={Logo} alt="" className="logo" />
      </span>

      <ul className="list">
        {/* <li className="listItem">
          <img src={user.photo} alt="" className="avatar" />
        </li>{" "} */}
        {/* <li className="listItem">{user.displayName}</li> */}
        {user ? (
          <li onClick={handleLogout}><a href="/logout">Logout</a></li>
        ) : (
          <><li>
              <Link to="/login">Login</Link>
            </li>
            {/* <li>
                <Link to="/signup">SignUp</Link>
              </li> */}
              </>

        )}
      </ul>
    </div>
  );
};

export default Navbar;
