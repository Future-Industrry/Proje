import React, { useState, useEffect } from 'react'
import SideBar from '../../components/SideBar';
import TopBar from '../../components/TopBar';
import Data from "../../components/Data";
import { BsSun, BsMoon } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import { BsBookmarkFill } from "react-icons/bs";


export default function Projects() {
  const [isOpen, setIsOpen] = useState(0);
  const navigate = useNavigate();

  return (
    <>
      <div className="flex *:h-[100vh] ">
       <SideBar isOpen={isOpen} setIsOpen={setIsOpen}/>
        <div className="w-[100%]">
          <div className={`bg-dark/50 w-full absolute ${isOpen ? 'h-full' : "h-[0]"} `} onClick={() => setIsOpen(!isOpen)}></div>
          <TopBar isOpen={isOpen} setIsOpen={setIsOpen}/>
          <div className="p-5">
            {/*کداتو اینجا بزن*/}
            <p>Projects</p>
          </div>
        </div>
      </div>
    </>
  );
}
