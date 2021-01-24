import React, { isValidElement } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton, Input } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { ArrowDropDown } from "@material-ui/icons";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";

import "./Header.css";
function Header() {
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
          <Avatar className="header_part2_right_avatar" />
        </div>
      </div>
    </div>
  );
}

export default Header;
