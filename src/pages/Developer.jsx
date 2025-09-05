import { FiArrowLeft, FiPhone, FiUser, FiMessageCircle, FiChevronDown } from "react-icons/fi"
import { useState } from "react"

import Image from '../assets/images/developerIMG.png'
import Pattern from '../assets/images/template0.png'
const items = [
    { title: "1", content: "پروژه هایتان در اولویت نمایش قرار میگیرند  ، شانس فروش بالاتر می رود و اعتبار حرفه ایتان بیشتر می شود ." },
    { title: "2", content: "پروژه هایتان در اولویت نمایش قرار میگیرند  ، شانس فروش بالاتر می رود و اعتبار حرفه ایتان بیشتر می شود ." },
]
export default function Developer() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="py-5 px-10">
            <div className="flex">
                <div className="flex gap-7 flex-1/2 flex-col pt-24">
                    <div className="flex items-center gap-2 text-primary">
                        <span className="border-t border-primary w-6 h-1 bg-primary"></span>
                        <p className="font-IranYekanBold text-[20px]">جایی برای رشد ، دیده شدن و فروش بهتر پروژه ها</p>
                    </div>
                    <p className="text-3xl font-extrabold">به جمع <span className="bg-[#e7d8f1]">توسعه دهندگان </span>ما بپیوندید</p>
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
                        <img src={Image} alt="" className="w-full h-full rotate-[10deg] rounded-2xl bg-[#50116D] " />

                    </div>

                </div>
            </div>

            <div className="bg-[#C39DDD] h-96 rounded-4xl mt-24 -rotate-3 relative">
                <div className="bg-[#833AB4] w-full h-full rounded-4xl rotate-3 absolute  overflow-hidden">
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
                <div className="flex flex-col items-center justify-center gap-5 rounded-3xl bg-white w-64 h-52 shadow-2xl " >
                    <FiUser className="size-14" />
                    <p>اعتبار سنجی پروژه ها</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-5 rounded-3xl bg-white w-64 h-52 shadow-2xl " >
                    <FiUser className="size-14" />
                    <p>اعتبار سنجی پروژه ها</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-5 rounded-3xl bg-white w-64 h-52 shadow-2xl " >
                    <FiUser className="size-14" />
                    <p>اعتبار سنجی پروژه ها</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-5 rounded-3xl bg-white w-64 h-52 shadow-2xl " >
                    <FiUser className="size-14" />
                    <p>اعتبار سنجی پروژه ها</p>
                </div>
            </div>

            <div className="flex flex-col gap-5 mt-24 ">
                <span className="border-t border-primary w-16 h-2 rounded-2xl bg-primary mb-3"></span>
                <p className="font-IranYekanBold text-2xl">سوالات متداول</p>
                <div className={`w-full bg-[#CBCBCB] rounded-3xl border border-gray-400 flex flex-col  ${isOpen ? "h-auto divide-y divide-gray-400" : "h-16"}`}>
                    <div className="flex justify-between items-center p-5">
                        <p>چرا باید توسعه دهنده تایید شده بشم ؟</p>
                        <FiChevronDown className={`size-6 transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`} onClick={() => setIsOpen(!isOpen)} />
                    </div>
                    <div className={`transition-all duration-500 overflow-hidden  ${isOpen ? "max-h-40 mt-5 pb-5 px-8" : "max-h-0"}`}>پروژه هایتان در اولویت نمایش قرار میگیرند  ، شانس فروش بالاتر می رود و اعتبار حرفه ایتان بیشتر می شود .</div>
                </div>
                <div className={`w-full bg-[#CBCBCB] rounded-3xl border border-gray-400 flex flex-col  ${isOpen ? "h-auto divide-y divide-gray-400" : "h-16"}`}>
                    <div className="flex justify-between items-center p-5">
                        <p>این تایید چه کمکی به من میکنه ؟</p>
                        <FiChevronDown className={`size-6 transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`} onClick={() => setIsOpen(!isOpen)} />
                    </div>
                    <div className={`transition-all duration-500 overflow-hidden  ${isOpen ? "max-h-40 mt-5 pb-5 px-8" : "max-h-0"}`}>پروژه هایتان در اولویت نمایش قرار میگیرند  ، شانس فروش بالاتر می رود و اعتبار حرفه ایتان بیشتر می شود .</div>
                </div>
                <div className={`w-full bg-[#CBCBCB] rounded-3xl border border-gray-400 flex flex-col  ${isOpen ? "h-auto divide-y divide-gray-400" : "h-16"}`}>
                    <div className="flex justify-between items-center p-5">
                        <p>آیا همه می توانند درخواست مصاحبه بدهند ؟ </p>
                        <FiChevronDown className={`size-6 transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`} onClick={() => setIsOpen(!isOpen)} />
                    </div>
                    <div className={`transition-all duration-500 overflow-hidden  ${isOpen ? "max-h-40 mt-5 pb-5 px-8" : "max-h-0"}`}>پروژه هایتان در اولویت نمایش قرار میگیرند  ، شانس فروش بالاتر می رود و اعتبار حرفه ایتان بیشتر می شود .</div>
                </div>
                <div className={`w-full bg-[#CBCBCB] rounded-3xl border border-gray-400 flex flex-col  ${isOpen ? "h-auto divide-y divide-gray-400" : "h-16"}`}>
                    <div className="flex justify-between items-center p-5">
                        <p>آیا برای مصاحبه باید چیز خاصی آماده کنیم ؟</p>
                        <FiChevronDown className={`size-6 transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`} onClick={() => setIsOpen(!isOpen)} />
                    </div>
                    <div className={`transition-all duration-500 overflow-hidden  ${isOpen ? "max-h-40 mt-5 pb-5 px-8" : "max-h-0"}`}>پروژه هایتان در اولویت نمایش قرار میگیرند  ، شانس فروش بالاتر می رود و اعتبار حرفه ایتان بیشتر می شود .</div>
                </div>
                <div className={`w-full bg-[#CBCBCB] rounded-3xl border border-gray-400 flex flex-col  ${isOpen ? "h-auto divide-y divide-gray-400" : "h-16"}`}>
                    <div className="flex justify-between items-center p-5">
                        <p>بعد از تایید شدن چه اتفاقی می افتد ؟</p>
                        <FiChevronDown className={`size-6 transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`} onClick={() => setIsOpen(!isOpen)} />
                    </div>
                    <div className={`transition-all duration-500 overflow-hidden  ${isOpen ? "max-h-40 mt-5 pb-5 px-8" : "max-h-0"}`}>پروژه هایتان در اولویت نمایش قرار میگیرند  ، شانس فروش بالاتر می رود و اعتبار حرفه ایتان بیشتر می شود .</div>
                </div>
            </div>
            <div className="flex mt-24">
                <span className="border-t border-primary w-16 h-2 rounded-2xl bg-primary mb-3"></span>
                <p>برخی از توسعه دهنده های پروجه </p>
            </div>


        </div>
    )
}