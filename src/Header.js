import React, { isValidElement } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton, Input } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import {
  ArrowDropDown,
  ExitToApp,
  SingleBedOutlined,
} from "@material-ui/icons";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Header.css";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
function Header() {
  const { displayName, email, photoUrl } = useSelector(selectUser);
  const dispatch = useDispatch();
  const signOut = () => {
    auth.signOut().then(dispatch(logout()));
  };
  return (
    <div className="header">
      <div className="header_part1">
        <div className="header_part1_left">
          <IconButton>
            <MenuIcon />
          </IconButton>
          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
            alt=""
          />
        </div>
        <div className="header_part1_middle">
          <div className="header_part1_middle_search">
            <IconButton>
              <SearchIcon />
            </IconButton>
            <input placeholder="Search Gmail" type="text" />
          </div>

          <IconButton>
            <ArrowDropDown />
          </IconButton>
        </div>
      </div>
      <div className="header_part2">
        <div className="header_part2_right">
          <IconButton>
            <HelpOutlineIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <IconButton>
            <AppsIcon />
          </IconButton>

          <Avatar className="header_part2_right_avatar" src={photoUrl} />
          <IconButton
            onClick={() => {
              signOut();
            }}
          >
            <ExitToApp />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
