import * as React from "react";
import { Calendar } from "../Calendar/index";
import { Sidebar } from "../Sidebar/index";
import { Toolbar } from "../Toolbar/index";
import "./Container.scss";

export const MainContainer = (): JSX.Element => {
  return (
    <div className="main-container" dir="ltr"
    // style={{background:'red', width:'100px', height: '100px'}}
    >
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="calendar">
        <Toolbar />
        <Calendar />
      </div>
    </div>
  );
};
