// import avatargirl from "../assets/avatargirl.png";
import Logo from "../assets/datingLogo.jpg";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar = ({user}) => {
  const logout = () => {
    window.open("http://localhost:3001/auth/logout", "_self");
    // fetch("http://localhost:3001/auth/logout")
    // .then((res)=>console.log(res))
    // .catch((err)=>console.log(err));
  };
  return (
    <div className="navbar">
      <span className="logo">
        <img src={Logo} alt="" className="logo" />
      </span>
      {(user)?(
      <ul className="list">
      
        
        <li className="listItem">
              <img
              
                 src={user.photo}
                alt=""
                className="avatar"
              />
            </li>  <li className="listItem">{user.displayName}</li>
            <li className="listItem" onClick={logout}>
              Logout
        </li>
        </ul>
) : (
        
          <Link className="Link" to="login">Login</Link>
  
       )}
    </div>
  )
}

export default Navbar;
