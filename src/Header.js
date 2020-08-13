import React from 'react';
import './Header.css';
import { Avatar, Input } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'



function Header(){
  return (
    <div className="header">
      <div className="header-left">
        <Avatar className="header-avatar" alt='' src='' />
        <AccessTimeIcon />
      </div>
      <div className="header-search">
        <SearchIcon/>
        <Input placeholder="Search Here Dumb Ass" />
      </div>
      <div className="header-right">
        <HelpOutlineIcon />
      </div>
    </div>
  )
}

export default Header;
