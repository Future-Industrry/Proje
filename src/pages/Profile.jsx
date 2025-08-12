import { useState } from "react";
import ProfileCard from "../components/ProfileCard";
import SampleCard from "../components/SampleCard";
import header from "/images/Frame 196.png";
export default function Profile() {
  const [activeTab, setActiveTab] = useState("about");
  return (
    <>
      <div className="w-full h-32 ">
        <img src={header} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="w-full h-[82.7vh] mx-auto dark:bg-dark">
        <div className="flex justify-between border-b *:cursor-pointer border-gray-300 mb-4 lg:justify-end lg:gap-[20%] lg:pl-[10%] dark:bg-gray-800 dark:border-gray-800">
          <button
            className={`px-4 py-2 text-gray-500 ${
              activeTab === "about" ? "!text-black dark:!text-white" : ""
            } `}
            onClick={() => setActiveTab("about")}
          >
            درباره ما
          </button>
          <button
            className={`px-4 py-2 text-gray-500 ${
              activeTab === "collection" ? "!text-black dark:!text-white" : ""
            } `}
            onClick={() => setActiveTab("collection")}
          >
            کالکشن
          </button>
          <button
            className={`px-4 py-2 text-gray-500 ${
              activeTab === "portfilio" ? "!text-black dark:!text-white" : ""
            }`}
            onClick={() => setActiveTab("portfilio")}
          >
            نمونه کار
          </button>
        </div>
        <div>
          {activeTab === "about" && (
            <div className="p-6 lg:py-0 lg:grid lg:grid-cols-[20%_75%] lg:gap-10">
              <ProfileCard />
              <p className="text-justify dark:text-gray-300">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد
              </p>
            </div>
          )}
          {activeTab === "collection" && (
            <div className="p-6 lg:py-0 lg:grid lg:grid-cols-[20%_75%] lg:gap-10">
              <ProfileCard />
              <div className="grid grid-cols-2 gap-[5%] sm:gap-[2%] sm:grid-cols-3">
                {/* محل وارد کردن نمونه های کار  */}
                <SampleCard />
                <SampleCard />
                <SampleCard />
              </div>
            </div>
          )}
          {activeTab === "portfilio" && (
            <div className="p-6 lg:py-0 lg:grid lg:grid-cols-[20%_75%] lg:gap-10 ">
              <ProfileCard />
              <div className=" className=grid grid-cols-2 gap-[5%] sm:gap-[2%] sm:grid-cols-3"></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
