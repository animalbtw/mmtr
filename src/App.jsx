import React from 'react';
import AppRoute from "./components/AppRoute";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <AppRoute />
      </div>
    </div>
  );
};

export default App;
