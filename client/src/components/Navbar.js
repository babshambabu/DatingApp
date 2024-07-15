import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../assets/datingLogo.jpg";

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:3001/auth/logout", {
        withCredentials: true,
      });
      setIsAuthenticated(false);
      navigate("/login");
      alert("Logged out")
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
        {isAuthenticated ? (
          <li onClick={handleLogout}><a href="/login">Logout</a></li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
