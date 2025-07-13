import React, { useState } from 'react'
import SideBar from '../../components/SideBar';
import TopBar from '../../components/TopBar';
import Edit from '../../assets/images/edit-2.svg'
import User from '../../assets/images/user.svg'
export default function Skills() {
  const [isOpen, setIsOpen] = useState(0)
  return (
    <>
      <div className="flex *:h-[100vh] ">
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="w-[100%]">
          <div className={`bg-dark/50 w-full absolute ${isOpen ? 'h-full' : "h-[0]"} `} onClick={() => setIsOpen(!isOpen)}></div>
          <TopBar isOpen={isOpen} setIsOpen={setIsOpen} />
          <div className="p-5">
            {/*کداتو اینجا بزن*/}
            <div className='border-1 border-light grid grid-cols-2 py-6 px-10 gap-7 rounded-3xl sm:gap-y-7 shadow text-sm sm:gap-x-0 sm:grid-cols-[18%_18%_18%_45%]'>
              <div className='flex gap-2 sm:col-span-2'>
                <p className=' font-IranYekanBold sm:text-lg'>مهارت های فردی </p>
                <img src={User} alt="" />
              </div>
              <div className='flex gap-2 sm:col-span-2 border w-max justify-self-end px-3 py-1 rounded-lg '>
                <p className=''>ویرایش</p>
                <img src={Edit} alt="" />
              </div>
              <p className='sm:border-b-1 border-second-light text-right sm:pb-4'>PYTHON</p>
              <p className="text-second-light text-left sm:text-right sm:border-b-1 sm:border-second-light sm:pb-4">100%</p>
              <p className='sm:border-b-1 border-second-light sm:pb-4'>JAVA SCRIPT</p>
              <p className="text-second-light text-left sm:text-right sm:border-b-1 sm:border-second-light sm:pb-4">75%</p>
              <p className='sm:border-b-1 border-second-light sm:pb-4'>CSS</p>
              <p className="text-second-light text-left sm:text-right sm:border-b-1 sm:border-second-light sm:pb-4">65%</p>
              <p className='sm:border-b-1 border-second-light sm:pb-4'>NEXT JS</p>
              <p className="text-second-light text-left sm:text-right sm:border-b-1 sm:border-second-light sm:pb-4">47%</p>
              <p className='sm:border-b-1 border-second-light sm:pb-4'>ERACT</p>
              <p className="text-second-light text-left sm:text-right sm:border-b-1 sm:border-second-light sm:pb-4">25%</p>
              <p className='sm:border-b-1 border-second-light sm:pb-4'>JQUERY</p>
              <p className="text-second-light text-left sm:text-right sm:border-b-1 sm:border-second-light sm:pb-4">50%</p>
              <p className='sm:border-b-1 border-second-light sm:pb-4'>FIGMA</p>
              <p className="text-second-light text-left sm:text-right sm:border-b-1 sm:border-second-light sm:pb-4">80%</p>
              <p className='sm:border-b-1 border-second-light sm:pb-4'>MY SQL</p>
              <p className="text-second-light text-left sm:text-right sm:border-b-1 sm:border-second-light sm:pb-4">90%</p>
              <p className='sm:border-b-1 border-second-light sm:pb-4'>HTML</p>
              <p className="text-second-light text-left sm:text-right sm:border-b-1 sm:border-second-light sm:pb-4">95%</p>
              <p className='sm:border-b-1 border-second-light sm:pb-4'>C++</p>
              <p className="text-second-light text-left sm:text-right sm:border-b-1 sm:border-second-light sm:pb-4">45%</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
