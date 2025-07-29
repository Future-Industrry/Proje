import img from "/images/banner-03.png";
import User from "/images/User.jpg";
import Basket from "/icons/basket.svg";
import Heart from "/icons/heart.svg";
import Receive from "/icons/receive.svg";
import Save from "/icons/save.svg";
import { FaRegBookmark, FaRegHeart } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";

export default function ProductDetails() {
  return (
    <div className="p-7 space-y-5 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img src={img} alt="" className="w-full h-80 rounded-md" />
        <div className="space-y-5">
          <div className="mt-12 flex items-center justify-between md:mt-0">
            <div className="flex items-center gap-4">
              <img src={User} alt="" className="w-14 h-14 rounded-full" />
              <h1 className="font-IranYekanBold">سهیل شکریان</h1>
            </div>
            <div className="flex gap-3 items-center *:cursor-pointer *:text-white *:bg-primary *:hover:bg-primary/70 *:duration-300 *:rounded-full *:p-1.5 *:size-[2rem] *:flex *:items-center *:justify-center ">
              <div>
                <HiOutlineDownload />
              </div>
              <div>
                <FaRegHeart />
              </div>
              <div>
                <FaRegBookmark />
              </div>
            </div>
          </div>
          <h1>طراحی کارت بانکی</h1>
          <p className="text-justify text-second-light font-IranYekanBold">
            توضیحات بیشتر پروژه ی خود را در این قسمت تایپ کنید توضیحات بیشتر
            پروژه توضیحات کامل تر درباره پروژه توضیحات کامل تر درباره پروژه
            توضیحات کامل تر درباره پروژه توضیحات کامل تر درباره پروژه توضیحات
            کامل تر درباره پروژه
          </p>
          <div className="flex gap-2 text-sm text-white">
            <p className="bg-second-light px-2 rounded-md">کامپیوتر</p>
            <p className="bg-second-light px-2 rounded-md">طراحی سایت</p>
            <p className="bg-second-light px-2 rounded-md">طراحی</p>
            <p className="bg-second-light px-2 rounded-md">فتوشاپ</p>
          </div>
          <div className="flex justify-between mt-10 items-center md:mt-5">
            <p className="text-primary font-IranYekanBold">1/450/000تومان</p>
            <div className="flex gap-2 items-center bg-primary hover:bg-primary/80 duration-300 p-1.5 px-4 cursor-pointer rounded-md text-white text-sm">
              <img src={Basket} alt="" className="size-6" />
              سبدخرید
            </div>
          </div>
        </div>
      </div>

      <h1>توضیحات تکمیلی درباره پروژه</h1>
      <p className="text-justify text-second-light mb-24">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis libero
        odit repellat nulla repellendus accusamus dolores doloribus incidunt
        recusandae, eius soluta, autem perspiciatis ratione sunt? Quos iste nemo
        eius libero. Nesciunt pariatur fugit magni ad voluptatibus quos
        architecto consequuntur saepe nemo! Architecto mollitia incidunt
        reprehenderit nobis, eligendi officiis eos iste asperiores esse natus
        odio? Numquam expedita qui laboriosam voluptatum ipsum. Harum id
        voluptate magni quidem modi excepturi alias beatae minus necessitatibus
        esse itaque iure eum omnis vel nobis, sint nostrum deserunt quo sit
        inventore autem, in dolore! Officiis, similique alias.
      </p>
      <h1 className="font-IranYekanBold">نظرات</h1>
      <div className="w-full shadow-xl shadow-zinc-200/70 bg-zinc-100 rounded-md h-9 md:w-96">
        <input
          type="text"
          className="p-2 px-3 placeholder:text-[.8rem] w-full h-full"
          placeholder="نظر خود را وارد کنید..."
        />
      </div>
      <hr className="text-second-light mt-14" />
      <img
        src={User}
        alt=""
        className="w-16 h-16 rounded-full absolute  left-1/2 transform -translate-x-1/2  -mt-12 border-8 border-white md:w-20 md:h-20 md:-mt-16"
      />
      <h1 className="text-center mt-10">سهیل شکریان</h1>
      <div className="flex justify-center">
        <p className="text-[12px] bg-primary hover:bg-primary/80 duration-300 p-1 px-3 rounded-md cursor-pointer">
          نمایش پروفایل
        </p>
      </div>
      <h1 className="mt-16 font-IranYekanBold">پروژه های مشابه</h1>

      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-2">
        <div className="space-y-3 shadow-xl shadow-zinc-200/50 p-3 rounded-lg">
          <img src={img} alt="" className="w-full h-48 rounded-md" />
          <h1 className="font-IranYekanBold">عنوان پروژه</h1>
          <p className="text-sm text-second-light line-clamp-3">
            توضیحات کامل تر درباره پروژه توضیحات کامل تر درباره پروژه توضیحات
            کامل تر{" "}
          </p>
        </div>
        <div className="space-y-3 shadow-xl shadow-zinc-200/50 p-3 rounded-lg">
          <img src={img} alt="" className="w-full h-48 rounded-md" />
          <h1 className="font-IranYekanBold">عنوان پروژه</h1>
          <p className="text-sm text-second-light line-clamp-3">
            توضیحات کامل تر درباره پروژه توضیحات کامل تر درباره پروژه توضیحات
            کامل تر{" "}
          </p>
        </div>
        <div className="space-y-3 shadow-xl shadow-zinc-200/50 p-3 rounded-lg">
          <img src={img} alt="" className="w-full h-48 rounded-md" />
          <h1 className="font-IranYekanBold">عنوان پروژه</h1>
          <p className="text-sm text-second-light line-clamp-3">
            توضیحات کامل تر درباره پروژه توضیحات کامل تر درباره پروژه توضیحات
            کامل تر{" "}
          </p>
        </div>
        <div className="space-y-3 shadow-xl shadow-zinc-200/50 p-3 rounded-lg">
          <img src={img} alt="" className="w-full h-48 rounded-md" />
          <h1 className="font-IranYekanBold">عنوان پروژه</h1>
          <p className="text-sm text-second-light line-clamp-3">
            توضیحات کامل تر درباره پروژه توضیحات کامل تر درباره پروژه توضیحات
            کامل تر{" "}
          </p>
        </div>
      </div>

      <h1 className="font-IranYekanBold mt-20">مقالات</h1>

      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-2">
        <div className="space-y-3 shadow-xl shadow-zinc-200/50 p-3 rounded-lg">
          <img src={img} alt="" className="h-50 object-cover rounded-md w-full" />
          <h1 className="font-IranYekanBold px-2">عنوان پروژه</h1>
          <p className="text-sm text-second-light line-clamp-3 p-2">
            توضیحات کامل تر درباره پروژه توضیحات کامل تر درباره پروژه توضیحات
            کامل تر{" "}
          </p>
        </div>
        <div className="space-y-3 shadow-xl shadow-zinc-200/50 p-3 rounded-lg">
          <img src={img} alt="" className=" h-50 object-cover rounded-md w-full" />
          <h1 className="font-IranYekanBold px-2">عنوان پروژه</h1>
          <p className="text-sm text-second-light line-clamp-3 p-2">
            توضیحات کامل تر درباره پروژه توضیحات کامل تر درباره پروژه توضیحات
            کامل تر{" "}
          </p>
        </div>
        <div className="space-y-3 shadow-xl shadow-zinc-200/50 p-3 rounded-lg ">
          <img src={img} alt="" className=" h-50 object-cover rounded-md w-full" />
          <h1 className="font-IranYekanBold px-2">عنوان پروژه</h1>
          <p className="text-sm text-second-light line-clamp-3 p-2">
            توضیحات کامل تر درباره پروژه توضیحات کامل تر درباره پروژه توضیحات
            کامل تر{" "}
          </p>
        </div>
        <div className="space-y-3 shadow-xl shadow-zinc-200/50 p-3 rounded-lg ">
          <img src={img} alt="" className=" h-50 object-cover rounded-md w-full" />
          <h1 className="font-IranYekanBold px-2">عنوان پروژه</h1>
          <p className="text-sm text-second-light line-clamp-3 p-2">
            توضیحات کامل تر درباره پروژه توضیحات کامل تر درباره پروژه توضیحات
            کامل تر{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
