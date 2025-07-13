import React, { useState } from 'react'
import SideBar from '../../components/SideBar';
import TopBar from '../../components/TopBar';
import User from '../../assets/images/User.jpg'
export default function Skills() {
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
            <div className='border-1 border-light grid grid-cols-2 py-6 px-12 rounded-3xl gap-7 shadow text-sm sm:grid-cols-[10%_10%_10%_65%]'>
              {/* <p className=''>مهارت های فردی</p>
              <p className='text-left border w-max justify-self-end px-3 py-1 rounded-3xl '>ویرایش</p> */}
              <p className='border-b-2'>PYTHON</p>
              <p className="text-second-light text-left sm:text-right border-b-2">100%</p>
              <p className='border-b-2'>JAVA SCRIPT</p>
              <p className="text-second-light text-left sm:text-right border-b-2">75%</p>
              <p className='border-b-2'>CSS</p>
              <p className="text-second-light text-left sm:text-right border-b-2">65%</p>
              <p className='border-b-2'>NEXT JS</p>
              <p className="text-second-light text-left sm:text-right border-b-2">47%</p>
              <p className='border-b-2'>ERACT</p>
              <p className="text-second-light text-left sm:text-right border-b-2">25%</p>
              <p className='border-b-2'>JQUERY</p>
              <p className="text-second-light text-left sm:text-right border-b-2">50%</p>
              <p className='border-b-2'>FIGMA</p>
              <p className="text-second-light text-left sm:text-right border-b-2">80%</p>
              <p className='border-b-2'>MY SQL</p>
              <p className="text-second-light text-left sm:text-right border-b-2">90%</p>
              <p className='border-b-2'>HTML</p>
              <p className="text-second-light text-left sm:text-right border-b-2">95%</p>
              <p className='border-b-2'>C++</p>
              <p className="text-second-light text-left sm:text-right border-b-2">45%</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
