import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../assets/datingLogo.jpg";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";

export default function AccountMenu() {
  const navigate = useNavigate();
  const { currentUser, logout } = useContext(AuthContext);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await axios.get("http://localhost:3001/auth/logout", {
        withCredentials: true,
      });
      localStorage.removeItem("token"); // Remove the token from local storage
      logout();
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleredirect = () => {
    navigate("/");
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <div className="navbar">
        <span onClick={handleredirect} className="logo" style={{ cursor: "pointer" }}>
            <img src={Logo} alt="" className="logo" />
          </span>
       
        <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
          {currentUser ? (
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
                <Avatar sx={{ width: 32, height: 32 }}>{currentUser.name.charAt(0).toUpperCase()}</Avatar>
            </IconButton>
          </Tooltip>
          ) : (
            <MenuItem onClick={() => navigate("/login")}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Login
            </MenuItem>
          )}
        </Box>
         
        {currentUser && (
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
            <MenuItem onClick={() => navigate("/profile")}>
            <Avatar /> Profile
          </MenuItem>
            <MenuItem onClick={() => navigate("/account")}>
            <Avatar /> My account
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
        )}
      </div>
    </React.Fragment>
  );
}
