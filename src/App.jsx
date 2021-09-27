import * as React from 'react';
import AppRoute from "./components/AppRoute";
import Header from "./components/Header";
import st from './assets/styles/app.module.css'

const App = () => {
  return (
    <div className={st.wrapper}>
        <div className={st.header}>
          <Header />
        </div>
        <div className={st.content}>
          <div className={st.router}>
            <AppRoute />
          </div>
        </div>
    </div>
  );
};

export default App;
