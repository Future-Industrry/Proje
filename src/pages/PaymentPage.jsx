import React, { useState } from "react";

import SimilarProject from "../components/SimilarProject";

import postcart1 from '../assets/paymentimg/proje1.png'
import postcart2 from '../assets/paymentimg/proje2.png'
import postcart3 from '../assets/paymentimg/proje3.jpg'
import projepimg from '../assets/paymentimg/projep1.png'
import profimg from '../assets/paymentimg/profile1.jpg'

export default function PaymentPage() {
  const imagescart = [
   postcart1,
   postcart2,
   postcart3,
  ];
  const [selected, setSelected] = useState("");
  return (

    <div className=" max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6 rtl md:relative">

  {/* پروفایل */}
  <div className="order-1 md:col-span-3 md:order-1">
  <div className="flex sm:justify-center items-center gap-8 w-full max-w-md mb-5">

<div className="w-[150px] h-[150px] rounded-full overflow-hidden border-4 border-[#F5F5F5]">
  <img
    src={profimg}
    alt="User profile"
    className="w-full h-full object-cover"
  />
</div>


<div className="flex flex-row gap-4 justify-center items-center"> 

  <p className="text-[#373D37]  font-bold text-[32px]  dark:text-[#F5F5F5] ">
   نمایش نام کاربری
  </p>
 
</div>
</div>
  </div>

  <div className="order-3 md:col-span-1 md:order-2">

  <div className="relative w-[100%] max-w-[446px] mx-auto h-[810px] bg-[#F7F7F7]  dark:bg-[#1B202C] rounded-[15px] shadow-[0px_0px_11px_rgba(0,0,0,0.15)] ">
   
   <div className="w-full h-[220px] sm:h-[300px] md:h-[350px] rounded-t-[15px] overflow-hidden">
     <img
       src={projepimg}
       alt="profile"
       className="w-full h-full object-cover"
     />
   </div>


   <div className="mt-6 text-center text-[#373D37] dark:text-[#F5F5F5]  font-bold  text-xl sm:text-2xl">
     نام پروژه
   </div>

  
   <div className="flex flex-col items-strat mt-8 gap-4 px-4 sm:px-6">
     <div className="text-[#373D37] dark:text-[#F5F5F5]  text-right  font-medium text-lg sm:text-xl">
       قیمت
     </div>
     <div className="text-[#373D37] dark:text-[#F5F5F5]  text-right font-medium text-lg sm:text-xl">
       متن
     </div>
     <div className="text-[#373D37] dark:text-[#F5F5F5]  text-right font-medium text-lg sm:text-xl">
       کد تخفیف
     </div>
     <div className="text-[#373D37] dark:text-[#F5F5F5]  text-right font-medium text-lg sm:text-xl">
       مالیات
     </div>
   </div>


   <div className="w-[90%] h-[1.5px] bg-[#373D37] dark:bg-[#F5F5F5] mx-auto my-6" />

 
   <div className="text-[#373D37] dark:text-[#F5F5F5] text-right font-bold text-xl sm:text-2xl pr-4 sm:pr-6">
     مبلغ کل
   </div>

 
   <div className="flex justify-center mt-10 pb-6">
     <button className="w-[160px] sm:w-[207px] h-[50px] sm:h-[55px] bg-[#324859] dark:bg-[#7B98B1] rounded-[15px] text-white font-bold text-lg sm:text-xl">
       پرداخت
     </button>
   </div>
 </div>

  </div>

  {/* فرم پرداخت - دوم در موبایل */}
  <div className="order-2 md:col-span-2 space-y-6 md:order-3">

  <div className="relative w-full max-w-[790px] mx-auto mt-2 bg-[#F5F5F5] shadow-[0_0_5px_rgba(0,0,0,0.15)] rounded-[20px]  px-14 py-8 dark:bg-[#1B202C]">

<h2 className="text-[#373D37] font-bold text-xl sm:text-2xl md:text-[32px] text-right mb-6 dark:text-[#F1FFED]">
  انتخاب درگاه پرداخت
</h2>


<div
  className="flex flex-row items-center justify-start gap-4 cursor-pointer mb-4"
  onClick={() => setSelected("asan")}
> 
<div
    className={`w-5 h-5 rounded-full border border-[#373D37] dark:border-[#F5F5F5]  ${
      selected === "asan" ? "bg-[#373D37] dark:bg-[#F5F5F5]" : "bg-[#F5F5F5] dark:bg-[#373D37]"
    }`}
  />
  <span className="text-[#373D37]  font-normal text-lg sm:text-xl md:text-[32px]  dark:text-[#F1FFED]">
    آسان پرداخت
  </span>
 
</div>


<div
  className="flex flex-row items-center justify-start gap-4 cursor-pointer"
  onClick={() => setSelected("snap")}
>
   <div
    className={`w-5 h-5 rounded-full border border-[#373D37] dark:border-[#F5F5F5] ${
      selected === "snap" ? "bg-[#373D37] dark:bg-[#F5F5F5]" : "bg-[#F5F5F5] dark:bg-[#373D37]"
    }`}
  />
  <span className="text-[#373D37]  text-right font-normal text-lg sm:text-xl md:text-[32px]  dark:text-[#F1FFED]">
    اسنپ پی
  </span>
 
</div>
</div>


  <div
      className="w-full max-w-[814px] mx-auto mt-10 bg-[#F5F5F5] dark:bg-[#1B202C] rounded-[20px] p-6 relative rtl"
      dir="rtl"
    >
 
      <h2 className="text-[#373D37] dark:text-[#F1FFED] text-[20px] md:text-[28px] font-bold leading-[48px] text-right mb-6">
        کد تخفیف دارید؟
      </h2>

    
      <div className="flex flex-row-reverse  md:flex-row-reverse  gap-4 md:gap-[47px] md:items-start items-center space-x-2">
     
        <button className="text-[#0AADE9] w-[105px] font-extrabold  text-[1.1rem] md:text-[1.5rem] leading-[48px]">
          بررسی کد
        </button>
  <input
          type="text"
          placeholder="کد تخفیف را وارد کنید"
          className="w-full md:w-[580px] h-[48px] md:h-[56px] bg-[#E1E1E1] dark:bg-[#E6E4E4] rounded-[20px] px-4 text-right text-sm md:text-base outline-none"
        /> 
        
        
      </div>
    </div>
  

  </div>

  {/* پروژه‌های مشابه - سوم در موبایل */}
  <div className="order-4 md:col-span-2 md:col-start-2 md:absolute md:top-2/3 space-y-6 md:order-4">
    <h2 className="text-xl text-gray-800 dark:text-[#F5F5F5] font-bold mb-6 text-right">
      شاید این پروژه‌ها برای شما مفید باشد:
    </h2>
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 ">
      {imagescart.map((img, index) => (
        <SimilarProject key={index} imageUrl={img} />
      ))}
    </div>
  </div>


  

</div>

  );
}
