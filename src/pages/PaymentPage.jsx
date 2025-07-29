import React, { useState } from "react";

import SimilarProject from "../components/SimilarProject";

import postcart1 from '/images/proje1.png'
import postcart2 from '/images/proje2.png'
import postcart3 from '/images/proje3.jpg'
import projepimg from '/images/projep1.png'
import profimg from '/images/profile1.jpg'

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
  <div className="order-1 md:col-span-3 ">
  <div className="flex sm:justify-center items-center gap-8 w-full max-w-md mb-2.5">

<div className="w-[85px] h-[85px] md:w-[110px] md:h-[110px] rounded-full overflow-hidden border-2 border-[#F5F5F5]">
  <img
    src={profimg}
    alt="User profile"
    className="w-full h-full object-cover"
  />
</div>


  <p className="text-[#373D37]  font-bold text-[20px] md:text-2xl dark:text-[#F5F5F5] ">
   نمایش نام کاربری
  </p>
 

</div>
  </div>

  <div className="order-2 md:col-span-1 ">

  <div className="relative w-[100%] max-w-[420px] mt-6 md:mt-0 md:max-w-[323px] mx-auto h-[655px] md:h-[645px] sm:h-[720px] bg-[#F7F7F7]  dark:bg-[#1B202C] rounded-[15px] shadow-[0px_0px_11px_rgba(0,0,0,0.15)] ">
   
   <div className="w-full h-[250px] sm:h-[300px] md:h-[205px] rounded-t-[15px] overflow-hidden">
     <img
       src={projepimg}
       alt="profile"
       className="w-full h-full object-cover"
     />
   </div>


   <div className="mt-6 text-center text-[#373D37] dark:text-[#F5F5F5]  font-bold text-[18px] md:text-[21px] sm:text-2xl">
     نام پروژه
   </div>

  
   <div className="flex flex-col items-strat mt-8 gap-4 px-2  sm:px-6">
     <div className="text-[#373D37] dark:text-[#F5F5F5]  text-right md:text-[18px] font-medium  sm:text-xl">
       قیمت
     </div>
     <div className="text-[#373D37] dark:text-[#F5F5F5] md:text-[18px]  text-right font-medium  sm:text-xl">
       متن
     </div>
     <div className="text-[#373D37] dark:text-[#F5F5F5] md:text-[18px]  text-right font-medium sm:text-xl">
       کد تخفیف
     </div>
     <div className="text-[#373D37] dark:text-[#F5F5F5] md:text-[18px]  text-right font-medium  sm:text-xl">
       مالیات
     </div>
   </div>


   <div className="w-[90%] h-[1.5px] bg-[#373D37] dark:bg-[#F5F5F5] mx-auto my-6" />

 
   <div className="text-[#373D37] dark:text-[#F5F5F5] text-right font-bold md:text-[20px] sm:text-2xl pr-2 sm:pr-6">
     مبلغ کل
   </div>

 
   <div className="flex justify-center mt-10 pb-2">
     <button className="w-[150px] sm:w-[160px] h-[40px] sm:h-[45px] cursor-pointer bg-[#324859] dark:bg-[#FFA500] hover:duration-300 hover:bg-amber-500 rounded-[15px] text-white font-bold  sm:text-xl">
       پرداخت
     </button>
   </div>
 </div>

  </div>

  {/* فرم پرداخت - دوم در موبایل */}
  <div className="order-3 md:col-span-2 space-y-2 md:justify-self-start">

  <div className=" md:w-[510px] w-full max-w-[790px] mx-auto bg-[#F5F5F5] shadow-[0_0_5px_rgba(0,0,0,0.15)] rounded-[20px] px-6 py-4  md:px-14 md:py-8 dark:bg-[#1B202C]">

<h2 className="text-[#373D37] font-bold text-[18px] sm:text-xl md:text-[20px] text-right mb-6 dark:text-[#F1FFED]">
  انتخاب درگاه پرداخت
</h2>


<div
  className="flex flex-row items-center justify-start gap-4 cursor-pointer align-baseline mb-4"
  onClick={() => setSelected("asan")}
> 
<div
    className={`w-3.5 h-3.5 rounded-full border border-[#373D37] dark:border-[#F5F5F5]  ${
      selected === "asan" ? "bg-[#373D37] dark:bg-[#F5F5F5]" : "bg-[#F5F5F5] dark:bg-[#373D37]"
    }`}
  />
  <span className="text-[#373D37]  font-normal  sm:text-xl md:text-[20px]  dark:text-[#F1FFED]">
    آسان پرداخت
  </span>
 
</div>


<div
  className="flex flex-row items-center justify-start gap-4 cursor-pointer"
  onClick={() => setSelected("snap")}
>
   <div
    className={`w-3.5 h-3.5 rounded-full border border-[#373D37] dark:border-[#F5F5F5] ${
      selected === "snap" ? "bg-[#373D37] dark:bg-[#F5F5F5]" : "bg-[#F5F5F5] dark:bg-[#373D37]"
    }`}
  />
  <span className="text-[#373D37]  text-right font-normal text-lg sm:text-xl md:text-[20px]  dark:text-[#F1FFED]">
    اسنپ پی
  </span>
 
</div>
</div>


  <div
      className="w-full max-w-[38rem] md:w-[510px]   mx-auto mt-5 bg-[#F5F5F5] dark:bg-[#1B202C] rounded-[20px] px-4 py-6 md:px-10 md:py-6  "
      dir="rtl"
    >
 
      <h2 className="text-[#373D37] dark:text-[#F1FFED]  text-[18px] md:text-[20px] font-bold leading-[28px] text-right mb-6">
        کد تخفیف دارید؟
      </h2>

    
      <div className="flex flex-row-reverse    gap-4 md:gap-[15px] md:items-start items-center">
     
        <button className="text-[#0AADE9] w-[150px]  font-medium text-[1rem] md:text-[1.2rem] leading-[28px]">
          بررسی کد
        </button>
  <input
          type="text"
          placeholder="کد تخفیف را وارد کنید"
          className="w-full md:w-[580px] h-[50px] md:h-[47px] dark:text-black bg-[#E1E1E1] dark:bg-[#E6E4E4] rounded-[20px] px-2 text-right text-sm md:text-base outline-none"
        /> 
        
        
      </div>
    </div>
 
  <div className="order-4 col-span-1 md:col-span-2 md:col-start-2 mt-8 mx-auto space-y-6 ">
    <h2 className="text-xl text-gray-800 dark:text-[#F5F5F5] font-bold mb-4 text-right">
      شاید این پروژه‌ها برای شما مفید باشد:
    </h2>
    <div className="grid grid-cols-2  gap-8 md:gap-4 sm:grid-cols-3 md:grid-cols-3 ">
      {imagescart.map((img, index) => (
        <SimilarProject key={index} imageUrl={img} />
      ))}
    </div>
  </div>

  </div>

  


  

</div>

  );
}
