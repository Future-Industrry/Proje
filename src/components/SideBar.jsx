import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function SideBar({ isOpen, setIsOpen }) {
    return (
        <div className={`${isOpen ? 'translate-x-[0]' : 'translate-x-[20rem]'} w-[15rem] fixed z-10 p-3 duration-500 border-l border-zinc-500 bg-white dark:bg-dark dark:text-white text-black`}>
            <button onClick={() => setIsOpen(!isOpen)}>close</button>
            <ul className="*:mb-2 **:w-full **:inline-block  *:rounded-sm *:hover:bg-primaryLight ">
                <li><NavLink to="/panel/userInfo" className="p-2 text-[.9rem] ">اطلاعات فردی</NavLink></li>
                <li><NavLink to="/panel/skills" className="p-2 text-[.9rem] ">مهارت های فنی</NavLink></li>
                <li><NavLink to="/panel/transactions" className="p-2 text-[.9rem] ">تراکنش ها</NavLink></li>
                <li><NavLink to="/panel/projects" className="p-2 text-[.9rem] ">پروژه ها</NavLink></li>
                <li><NavLink to="/panel/achievements" className="p-2 text-[.9rem] ">دستاورد ها</NavLink></li>
                <li><NavLink to="/panel/setting" className="p-2 text-[.9rem] ">تنظیمات</NavLink></li>
            </ul>
        </div>
    )
}
