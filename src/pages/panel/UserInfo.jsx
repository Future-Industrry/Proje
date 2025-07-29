import { useState } from "react";
import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";
import { CiEdit } from "react-icons/ci";
import { LiaUserSolid } from "react-icons/lia";

export default function UserInfo() {
  const [isOpen, setIsOpen] = useState(0);
  return (
    <>
      <div className="flex *:h-[100vh] bg-white dark:bg-dark">
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="w-[100%] ">
          <div
            className={`bg-dark/50 w-full absolute ${
              isOpen ? "h-full" : "h-[0]"
            } `}
            onClick={() => setIsOpen(!isOpen)}
          ></div>
          <TopBar isOpen={isOpen} setIsOpen={setIsOpen} />
          <div className="p-5 dark:text-white text-black">
            <div className="shadow-[0_3px_15px_5px_rgba(0,0,0,0.1)] bg-dark dark:bg-white/3 w-full h-[80vh] rounded-2xl py-5 px-10 ">
              <div className="flex items-center justify-between  h-[3rem] *:flex *:items-center *:justify-center *:gap-1">
                <div>
                  <LiaUserSolid className="size-[2.2rem]" />
                  <p className="text-[15px] mr-1 lg:text-[20px]">اطلاعات فردی</p>
                </div>
                <div className="border-1 border-zinc-300 px-3 py-1 rounded-[.7rem] cursor-pointer hover:bg-zinc-300 dark:hover:bg-zinc-100/10 duration-300 ">
                  <p className="text-[11px] lg:text-[14px] ">ویرایش</p>
                  <CiEdit className="size-[1.2rem]" />
                </div>
              </div>
              <div className="grid lg:grid-cols-2 py-3 md:grid-cols-2 sm:grid-cols-1 ">
                <div className="*:grid *:grid-cols-2 *:gap-3 *:mb-7 *:p-2 *:border-b-2 *:border-zinc-300">
                  <div className="*:not-odd:text-zinc-400 *:not-odd:text-[.9rem] *:not-even:text-[1.1rem] ">
                    <p>نام</p>
                    <p>محمد</p>
                  </div>
                  <div className="*:not-odd:text-zinc-400 *:not-odd:text-[.9rem] *:not-even:text-[1.1rem] ">
                    <p>نام خوانوادگی</p>
                    <p>امین پور</p>
                  </div>
                  <div className="*:not-odd:text-zinc-400 *:not-odd:text-[.9rem] *:not-even:text-[1.1rem] ">
                    <p>سن</p>
                    <p>20 سال</p>
                  </div>
                  <div className="*:not-odd:text-zinc-400 *:not-odd:text-[.9rem] *:not-even:text-[1.1rem] ">
                    <p>تولد</p>
                    <p>1384/01/09</p>
                  </div>
                  <div className="*:not-odd:text-zinc-400 *:not-odd:text-[.9rem] *:not-even:text-[1.1rem] ">
                    <p>کد ملی</p>
                    <p>0987654321</p>
                  </div>
                </div>
                <div className="*:grid *:grid-cols-2 *:gap-3 *:mb-7 *:p-2 *:border-b-2 *:border-zinc-300  ">
                  <div className="*:not-odd:text-zinc-400 *:not-odd:text-[.9rem] *:not-even:text-[1.1rem] ">
                    <p>تلفن</p>
                    <p>09151234567</p>
                  </div>
                  <div className="*:not-odd:text-zinc-400 *:not-odd:text-[.9rem] *:not-even:text-[1.1rem] ">
                    <p>اکانت</p>
                    <p>توسعه دهنده</p>
                  </div>
                  <div className="*:not-odd:text-zinc-400 *:not-odd:text-[.9rem] *:not-even:text-[1.1rem] ">
                    <p>تحصیلات</p>
                    <p>کاردانی نرم افزار</p>
                  </div>
                  <div className="*:not-odd:text-zinc-400 *:not-odd:text-[.9rem] *:not-even:text-[1.1rem] ">
                    <p>مدت عضویت</p>
                    <p>1 روز</p>
                  </div>
                  <div className="*:not-odd:text-zinc-400 *:not-odd:text-[.9rem] *:not-even:text-[1.1rem] ">
                    <p>محل سکونت</p>
                    <p>مشهد</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
