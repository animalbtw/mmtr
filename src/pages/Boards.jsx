import * as React from 'react';
import {connect} from "react-redux";
import BoardsCreate from "../components/boards/BoardsCreate";
import BoardsList from "../components/boards/BoardsList";

const Boards = () => {
  return (
    <>
      <BoardsCreate />
      <BoardsList />
    </>
  );
};



export default connect()(Boards);
