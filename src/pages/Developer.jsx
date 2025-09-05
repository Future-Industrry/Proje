import { FiArrowLeft, FiPhone,FiUser,FiMessage } from "react-icons/fi"

import Image from '../assets/images/developerIMG.jpg'
import Pattern from '../assets/images/template0.png'
export default function Developer() {
    return (
        <div className="p-5">
            <div className="flex">
                <div className="flex gap-5 flex-1/2 flex-col pt-24">
                    <div className="flex items-center gap-2 text-primary">
                        <span className="border-t border-primary w-6 h-1 bg-primary"></span>
                        <p>جایی برای رشد ، دیده شدن و فروش بهتر پروژه ها</p>
                    </div>
                    <p className="text-2xl font-IranYekanBold">به جمع <span className="bg-[#e7d8f1]">توسعه دهندگان </span>ما بپیوندید</p>
                    <p>پروژه های شما با نام و اعتبار خودتان در سایت ثبت می شوند و برای شروع فقط کافیه فرم همکاری را پر کنید و یک مصاحبه کوتاه داشته باشید</p>
                    <div className="flex gap-24">
                        <p className="flex items-center gap-2 bg-[#50116D] py-1 px-2 text-white rounded-sm">
                            شروع کن
                            <FiArrowLeft />
                        </p>
                        <p className="flex gap-2 items-center text-[#50116D]">
                            <FiPhone />
                            مشاوره بگیرید
                        </p>
                    </div>
                </div>
                <div className=" flex flex-1/2 justify-center py-5">
                    <div className="w-72 h-[400px] bg-[#C39DDD] rotate-[-20deg] rounded-2xl">
                        <img src={Image} alt="" className="w-full h-full rotate-[10deg] rounded-2xl bg-red-500" />

                    </div>

                </div>
            </div>

            <div className="bg-[#C39DDD] h-96 rounded-3xl mt-24 -rotate-3 relative">
                <div className="bg-[#833AB4] w-full h-full rounded-3xl rotate-3 absolute  overflow-hidden">
                    <img src={Pattern} alt="" className="h-full w-[50%] opacity-50" />
                    <div className="w-full h-full absolute top-0 text-white flex pt-24 px-20  font-IranYekanBold">
                        <div className="flex flex-col flex-1/2">
                            <span className="border-t border-primary w-16 h-2 rounded-2xl bg-primary mb-3"></span>
                            <p className="text-2xl">چرا توسعه دهنده بشی؟</p>
                        </div>
                        <div className="flex flex-1/2 text-lg">
                            <p>پروژه های شما  با عنوان توسعه دهنده ی تایید شده نمایش داده می شوند و موجب جلب اعتماد  بیشتر خریداران خواهد شد .</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="w-full -mt-36 relative flex justify-around text-2xl font-IranYekanBold">
                <div className="w-64 h-52 bg-white rounded-3xl shadow flex flex-col gap-5 items-center justify-center">
                    <p>اعتبار سنجی پروژه ها</p>
                </div>
                <div className="w-64 h-52 bg-white rounded-3xl shadow flex flex-col gap-5 items-center justify-center">
                    <p>افزایش شانس فروش</p>
                </div>
                <div className="w-64 h-52 bg-white rounded-3xl shadow flex flex-col gap-5 items-center justify-center">
                    <FiMessage/>
                    <p>حمایت و پشتیبانی ویژه</p>
                </div>
                <div className="w-64 h-52 bg-white rounded-3xl shadow flex flex-col gap-5 items-center justify-center">
                    <FiUser className="size-16"/>
                    <p>رزومه و برند شخصی</p>
                </div>
            </div>
            
        </div>
    )
}