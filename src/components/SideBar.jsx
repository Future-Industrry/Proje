import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function SideBar({ isOpen, setIsOpen }) {
    return (
        <div className={`${isOpen ? 'translate-x-[0]' : 'translate-x-[20rem]'} w-[15rem] fixed z-10 bg-white p-3 duration-500 `}>
            <button onClick={() => setIsOpen(!isOpen)}>close</button>
            <ul className="*:mb-2 **:w-full **:inline-block  *:rounded-sm *:hover:bg-primaryLight ">
                <li><NavLink to="/userInfo" className="p-1">اطلاعات فردی</NavLink></li>
                <li><NavLink to="/skills" className="p-1">مهارت های فنی</NavLink></li>
                <li><NavLink to="/transactions" className="p-1">تراکنش ها</NavLink></li>
                <li><NavLink to="/projects" className="p-1">پروژه ها</NavLink></li>
                <li><NavLink to="/achievements" className="p-1">دستاورد ها</NavLink></li>
                <li><NavLink to="/setting" className="p-1">تنظیمات</NavLink></li>
            </ul>
        </div>
    )
}
