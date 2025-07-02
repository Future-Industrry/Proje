import React, { useState } from 'react'
import SideBar from '../../components/SideBar';
import TopBar from '../../components/TopBar';

export default function Setting() {
  const [isOpen, setIsOpen] = useState(0)
  return (
    <>
      <div className="flex *:h-[100vh] ">
       <SideBar isOpen={isOpen} setIsOpen={setIsOpen}/>
        <div className="w-[100%]">
          <div className={`bg-dark/50 w-full absolute ${isOpen ? 'h-full' : "h-[0]"} `} onClick={() => setIsOpen(!isOpen)}></div>
          <TopBar isOpen={isOpen} setIsOpen={setIsOpen}/>
          <div className="p-5">
            {/*کداتو اینجا بزن*/}
            <p>Setting</p>
          </div>
        </div>
      </div>
    </>
  );
}
