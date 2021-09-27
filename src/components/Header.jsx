import * as React from 'react';
import {HOME_ROUTE} from "../utils/constants";
import {Link} from "react-router-dom";
import logo from '../assets/img/smile.png'
import st from '../assets/styles/header.module.css'

const Header = () => {
  return (
    <div className={st.wrapper}>
      <Link to={HOME_ROUTE} className={st.link}>
        <img
          src={logo}
          alt="Home"
          className={st.logo}
        />
      </Link>
    </div>
  );
};

export default Header;
