import { FiArrowLeft, FiPhone, FiUser, FiMessageCircle, FiChevronDown } from "react-icons/fi"
import { CircleFadingPlus } from "lucide-react"
import { useState } from "react"

import A from '../../public/images/developer0.jpg'

import Image from '../assets/images/developerIMG.png'
import Pattern from '../assets/images/template0.png'
import { div } from "framer-motion/client"
const items = [
    { title: "چرا باید توسعه دهنده تایید شده بشم ؟", content: "پروژه هایتان در اولویت نمایش قرار میگیرند  ، شانس فروش بالاتر می رود و اعتبار حرفه ایتان بیشتر می شود ." },
    { title: "این تایید چه کمکی به من میکنه ؟ ", content: "پروژه هایتان در اولویت نمایش قرار میگیرند  ، شانس فروش بالاتر می رود و اعتبار حرفه ایتان بیشتر می شود ." },
    { title: "آیا همه می توانند درخواست مصاحبه بدهند ؟ ", content: "پروژه هایتان در اولویت نمایش قرار میگیرند  ، شانس فروش بالاتر می رود و اعتبار حرفه ایتان بیشتر می شود ." },
    { title: "آیا برای مصاحبه باید چیز خاصی آماده کنیم ؟ ", content: "پروژه هایتان در اولویت نمایش قرار میگیرند  ، شانس فروش بالاتر می رود و اعتبار حرفه ایتان بیشتر می شود ." },
    { title: "بعد از تایید شدن چه اتفاقی میوفته ؟", content: "پروژه هایتان در اولویت نمایش قرار میگیرند  ، شانس فروش بالاتر می رود و اعتبار حرفه ایتان بیشتر می شود .", },
]

const developers = [
    { name: 'هانیه رضایی', job: 'برنامه نویس وب | Python Developer', desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', img: '../../public/images/developer0.jpg' },
    { name: 'علی رضایی', job: 'برنامه نویس وب | Python Developer', desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', img: '../../public/images/developer1.jpg' },
    { name: 'بهنام غفوری', job: 'برنامه نویس وب | Python Developer', desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', img: '../../public/images/developer2.jpg' },
    { name: 'امید بخشی', job: 'برنامه نویس وب | Python Developer', desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ', img: '../../public/images/developer3.jpg' }
]
export default function Developer() {
    const [isOpen, setIsOpen] = useState(null)

    const toggle = (index) => {
        if (isOpen === index) {
            setIsOpen(null)
        } else {
            setIsOpen(index)
        }
    }
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

            <div className="flex flex-col gap-5 my-24 ">
                <span className="border-t border-primary w-16 h-2 rounded-2xl bg-primary mb-3"></span>
                <p className="font-IranYekanBold text-2xl">سوالات متداول</p>

                {items.map((items, index) => (
                    <div className={`w-full bg-[#CBCBCB] rounded-3xl border border-gray-400 ${isOpen === index ? "h-auto divide-y divide-gray-400" : "h-16"}`} >
                        <div className={`p-5 flex justify-between `} key={index}>
                            <p>{items.title}</p>
                            <FiChevronDown key={index} className={`size-6 transition-transform duration-300${isOpen === index ? "rotate-90" : "rotate-0"}`} onClick={() => toggle(index)} />

                        </div>
                        {isOpen === index && (
                            <div className={`transition-all duration-500 overflow-hidden  ${isOpen === index ? "max-h-40 mt-5 pb-3 px-8" : "max-h-0"}`} key={index}>پروژه هایتان در اولویت نمایش قرار میگیرند  ، شانس فروش بالاتر می رود و اعتبار حرفه ایتان بیشتر می شود .</div>
                        )}
                    </div>
                ))}
            </div>
            <div className="flex flex-col">
                <span className="border-t border-primary w-16 h-2 rounded-2xl bg-primary mb-3"></span>
                <div>
                    <p className="font-IranYekanBold text-2xl">برخی از توسعه دهندگان پروجه</p>
                </div>
                <div className="flex my-5 justify-between">
                    {developers.map((developer) => (
                        <div className="w-72 h-[400px] shadow rounded-2xl p-4 flex flex-col gap-4 items-center">
                            <img src={developer.img} alt="" className="rounded-2xl w-full h-40 bg-cover bg-center font-extrabold" />
                            <p>{developer.name}</p>
                            <p>{developer.job}</p>
                            <p className="text-sm text-justify">{developer.desc}</p>
                            <div className="bg-primary px-6 py-3 text-white rounded-2xl -mt-2 flex items-center gap-2">
                                <CircleFadingPlus/>
                                <button >همکاری</button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}
