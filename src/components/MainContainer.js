import React from "react";
import Sidebar from "./Sidebar";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useDispatch } from "react-redux";
import { openMenu } from "../utilties/sideBarSlice";

const MainContainer = () => {

  const dispatch = useDispatch();
  dispatch(openMenu());
  
  return (

    <div className="space-y-5 ">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
