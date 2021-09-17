import React from 'react';
import {Link} from "react-router-dom";
import {HOME_ROUTE} from "../utils/constants";
import logo from '../assets/img/smile.png';
import st from '../assets/styles/header.module.css';

const Header = () => {
  return (
    <div className={st.wrapper}>
      <Link className={st.wrapper_link} to={HOME_ROUTE}>
        <img className={st.wrapper_link_img} src={logo} alt={'Домой'}/>
      </Link>
    </div>
  );
};

export default Header;
