import React, { useState } from 'react'
import SideBar from '../../components/SideBar';
import TopBar from '../../components/TopBar';


export default function Setting() {
  const [isOpen, setIsOpen] = useState(0)
  return (
    <>
      <div className="flex *:h-[100vh]">
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="w-full">
          <div
            className={`bg-dark/50 w-full absolute ${isOpen ? 'h-full' : "h-[0]"}`}
            onClick={() => setIsOpen(!isOpen)}
          ></div>
          <TopBar isOpen={isOpen} setIsOpen={setIsOpen} />

          {/*-------------- فرم تنظیمات --------------*/}
          <div className="p-5 flex justify-start"> 
            <div className="w-full max-w-md text-right space-y-8">
              {/* نام کاربری */}
              <div>
                <h2 className="text-lg font-medium leading-relaxed mb-2">نام کاربری</h2>
                <hr />
                <section className="mt-4 space-y-4">
                  <div>
                    <h3 className="inline-block ml-1 text-lg font-bold text-red-700">توجه:</h3>
                    <p className="inline-block text-sm font-bold text-gray-500/80 dark:text-[#FFD700] dark:shadow-[10px_8px_10px_black]">
                      تنها یک بار میتوانید نام کاربری خود را تغییر دهید.
                    </p>
                  </div>
                  <input
                    type="text"
                    placeholder="نام کاربری"
                    className="inputsSetting w-full rounded-md px-3 py-2 placeholder-gray-400 text-sm outline-none focus:ring-0 focus:border-gray-400"
                  />
                  <button
                    type="button"
                    className="bg-yellow-300 px-4 py-2 rounded-md text-white text-sm hover:bg-yellow-600 transition block"
                  >
                    تغییر نام کاربری
                  </button>
                </section>
              </div>

              {/* گذرواژه */}
              <div>
                <h2 className="text-lg font-medium leading-relaxed mb-2">انتخاب گذرواژه</h2>
                <hr />
                <section className="mt-4 space-y-4">
                  <div>
                    <label className="block text-sm mb-1">گذرواژه</label>
                    <input
                      type="password"
                      placeholder="رمز عبور"
                      className="inputsSetting w-full border border-gray-400 rounded-md px-3 py-2 placeholder-gray-400 text-sm outline-none focus:ring-0 focus:border-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">تکرار گذرواژه</label>
                    <input
                      type="password"
                      placeholder="تکرار رمز عبور"
                      className="inputsSetting w-full border border-gray-400 rounded-md px-3 py-2 placeholder-gray-400 text-sm outline-none focus:ring-0 focus:border-gray-400"
                    />
                  </div>
                  <button
                    type="button"
                    className="bg-yellow-400 px-4 py-2 rounded-md text-white text-sm hover:bg-yellow-600 transition"
                  >
                    به‌روزرسانی گذرواژه
                  </button>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}