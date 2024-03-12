"use client";
import { NextPage } from "next";
import { useState } from "react";
import Mixer from "../../components/audio/Mixer";
import Room from "../../components/room/Room";

const CreateDash: NextPage = () => {
  const [tab, setTab] = useState(true);
  const handleClick = (e) => {
    e.target.id === "Session" ? setTab(false) : setTab(true);
  };
  return (
    <div>
      <nav className="flex flex-row">
        <div id="Room" className="basis-1/2" onClick={(e) => handleClick(e)}>
          Create Room
        </div>
        <div id="Session" className="basis-1/2" onClick={(e) => handleClick(e)}>
          Session
        </div>
      </nav>
      {!tab && <Mixer />}
      {tab && <Room />}
    </div>
  );
};

export default CreateDash;
