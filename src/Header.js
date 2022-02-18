import React from "react";
import "./Header.css";
import {
  Menu,
  AccountCircle,
  Search,
  ArrowDropDown,
  Apps,
  Notifications,
} from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const signOut = () => {
    auth.signOut();
    dispatch(logout());
  };
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <Menu />
        </IconButton>
        <img
          src={
            "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r2.png"
          }
          alt=""
        />
      </div>
      <div className="header__middle">
        <Search />
        <input placeholder="Search email" type="text" />
        <ArrowDropDown className="header__inputCaret" />
      </div>
      <div className="header__right">
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <IconButton onClick={signOut}>
          {user.photoUrl ? (
            <img
              src={user.photoUrl}
              alt=""
              height={30}
              width={30}
              style={{ borderRadius: "50%" }}
            />
          ) : (
            <AccountCircle />
          )}
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
