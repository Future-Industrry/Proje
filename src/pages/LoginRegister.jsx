import React from 'react'

export default function LoginRegister() {
  return (
    <div className="bg-blue-200 h-[100vh] flex items-center justify-center gap-2 flex-row-reverse">

      <div className="relative p-[1rem] rounded-xl bg-white h-[20rem] flex items-center justify-between flex-col">
        <span className="bg-blue-700 absolute left-[-.3rem] translate-y-[6rem]  duration-300 h-[7rem] w-[.3rem] rounded-full "></span>
        <div className="grid place-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-react"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" /><path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" /><path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" /><path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" /><path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" /><path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" /><path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" /></svg>
          <p className="text-blue-700 font-bold">پروجه</p>
        </div>
        <div className="grid place-items-center">
          <img src="/icons/user-plus.svg" className="bg-blue-200 p-2 rounded-lg" alt="" />
          <p className="text-[.9rem] mt-[.3rem]">ثبت نام</p>
        </div>
        <div className="grid place-items-center">
          <img src="/icons/user-scan.svg" alt="" />
          <p className="text-[.9rem] mt-[.3rem]">ورود</p>
        </div>
      </div>


      <div className="h-[30rem] overflow-hidden  bg-white rounded-2xl ">
        <div className="translate-y-[-30rem] duration-300">
          <img src="/images/Company-amico.png" alt="" className="w-[30rem] " />
          <img src="/images/Authentication-rafiki.png" alt="" className="w-[30rem] " />
          <img src="/images/Ok-bro.png" alt="" className="w-[30rem] " />
        </div>
      </div>


      <div className="bg-white h-[25rem] w-[24rem] rounded-xl p-[.5rem] px-[1rem] ">
        <form action="" className="flex items-center justify-center flex-col">
          <h1 className="font-bold text-3xl mb-3 mt-3">پروجه</h1>
          <p className="mb-5 text-[.9rem] ">اکانتی برای ورود ندارید؟ <button className="text-blue-600 cursor-pointer">ثبت نام</button></p>
          <div className="w-[100%] px-5">
            <label htmlFor="">ایمیل</label>
            <div className="border-[1.6px] mt-2 mb-4 rounded-lg p-2 border-zinc-300 flex items-center justify-center">
              <input type="text" className="w-full" placeholder="example@gmail.com" />
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>            </div>
            <label htmlFor="">رمز عبور</label>
            <div className="border-[1.6px] mt-2 p-2 rounded-lg border-zinc-300 flex items-center justify-center">
              <input type="password" className="w-full" placeholder="1234567890" />
              <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-eye"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-eye-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M13.048 17.942a9.298 9.298 0 0 1 -1.048 .058c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6a17.986 17.986 0 0 1 -1.362 1.975" /><path d="M22 22l-5 -5" /><path d="M17 22l5 -5" /></svg> */}
            </div>
            <div>
              <a href="" className="text-[.8rem] mt-2 text-center w-[100%] inline-block">رمز عبور خود را فراموش کرده اید؟</a>
            </div>
            <button className="bg-blue-500 flex items-center justify-center cursor-pointer w-[100%] rounded-xl p-2 mt-5 text-white ">
              <svg className="mt-[.2rem] ml-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
              <p className="mb-2">ورود</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
