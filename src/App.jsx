import React from 'react';
import AppRoute from "./components/AppRoute";
import Header from "./components/Header";
import st from './assets/styles/app.module.css'

const App = () => {
  return (
    <div className={st.wrapper}>
      <div className={st.wrapper_header}>
        <Header />
      </div>
      <div className={st.wrapper_content}>
        <div className={st.wrapper_content_container}>
          <AppRoute />
        </div>
      </div>
    </div>
  );
};

export default App;
