import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../assets/datingLogo.jpg";
import { AuthContext } from "../AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:3001/auth/logout", {
        withCredentials: true,
      });
      logout();
      navigate("/login");
      alert("Logged out");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="navbar">
      <span className="logo">
        <img src={Logo} alt="Logo" className="logo" />
      </span>

      <ul className="list">
        {user ? (
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
