import { useState } from "react";
import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";
import { CiEdit } from "react-icons/ci";
import { LiaUserSolid } from "react-icons/lia";

export default function UserInfo() {
  const [isOpen, setIsOpen] = useState(1);
  return (
    <>
      <div className="flex bg-white dark:bg-dark  text-black dark:text-white">
        {/*sadebar*/}
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />

        {/*content*/}
        <div className={`${isOpen?"w-[100%] lg:w-[80%] xl:w-[83%] ":"w-[100%]"} `}>
          <TopBar isOpen={isOpen} setIsOpen={setIsOpen} />
          {/*content of dashboard*/}
          <div className="p-5 dark:text-white text-black ">
            <div className='grid grid-cols-2 bg-white dark:bg-[#1B202C] py-6 px-10 gap-7 rounded-xl sm:gap-y-7 shadow-[0_3px_15px_5px_rgba(0,0,0,0.1)] sm:gap-x-0 sm:grid-cols-[25%_25%_25%_25%]'>
              <div className='flex items-center gap-1 sm:col-span-2'>
                <LiaUserSolid className="sm:size-[2.2rem] size-7" />
                <p className=' font-IranYekanBold text-[1rem]'>اطلاعات فردی</p>
              </div>
              <div className='flex items-center gap-2 sm:col-span-2 text-[.8rem] border w-max justify-self-end px-3 py-1 rounded-xl cursor-pointer duration-300 hover:bg-zinc-200 dark:hover:bg-zinc-50/10 '>
                <p className=''>ویرایش</p>
                <CiEdit className="size-[1rem]" />
              </div>
              <p className='sm:border-b-1 border-second-light sm:pb-4'>نام</p>
              <p className="text-second-light text-left sm:text-right sm:border-b-1 sm:border-second-light sm:pb-4">محمد</p>
              <p className='sm:border-b-1 border-second-light sm:pb-4'>نام خانوادگی</p>
              <p className="text-second-light text-left sm:text-right sm:border-b-1 sm:border-second-light sm:pb-4">امین پور</p>
              <p className='sm:border-b-1 border-second-light sm:pb-4'>سن</p>
              <p className="text-second-light text-left sm:text-right sm:border-b-1 sm:border-second-light sm:pb-4">21</p>
              <p className='sm:border-b-1 border-second-light sm:pb-4'>تولد</p>
              <p className="text-second-light text-left sm:text-right sm:border-b-1 sm:border-second-light sm:pb-4">1384</p>
              <p className='sm:border-b-1 border-second-light sm:pb-4'>کد ملی</p>
              <p className="text-second-light text-left sm:text-right sm:border-b-1 sm:border-second-light sm:pb-4">06235546523</p>
              <p className='sm:border-b-1 border-second-light sm:pb-4'>تلفن</p>
              <p className="text-second-light text-left sm:text-right sm:border-b-1 sm:border-second-light sm:pb-4">09151234567</p>
              <p className='sm:border-b-1 border-second-light sm:pb-4'>اکانت</p>
              <p className="text-second-light text-left sm:text-right sm:border-b-1 sm:border-second-light sm:pb-4">توسعه دهنده</p>
              <p className='sm:border-b-1 border-second-light sm:pb-4'>تحصیلات</p>
              <p className="text-second-light text-left sm:text-right sm:border-b-1 sm:border-second-light sm:pb-4">کاردانی نرم افزار</p>
              <p className='sm:border-b-1 border-second-light sm:pb-4'>مدت عضویت</p>
              <p className="text-second-light text-left sm:text-right sm:border-b-1 sm:border-second-light sm:pb-4">1 روز</p>
              <p className='sm:border-b-1 border-second-light sm:pb-4'>محل سکونت</p>
              <p className="text-second-light text-left sm:text-right sm:border-b-1 sm:border-second-light sm:pb-4">مشهد</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


