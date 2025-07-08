import { useState } from "react"
import ProfileCard from "../components/ProfileCard"
import SampleCard from "../components/SampleCard"
import A from '../assets/images/banner-06.png'
export default function Profile({decs}) {
    const [activeTab, setActiveTab] = useState('about')
    return (
        <>
            <div className="w-full h-24 bg-primary"></div>
            <div className="w-full mx-auto ">
                <div className="flex justify-between border-b border-gray-300 mb-4 lg:justify-end lg:gap-[20%] lg:pl-20">
                    <button className={`px-4 py-2 text-gray-400 ${activeTab === 'about' ? '!text-black' : ''}`} onClick={() => setActiveTab('about')}>درباره ما</button>
                    <button className={`px-4 py-2 text-gray-400 ${activeTab === 'collection' ? '!text-black' : ''}`} onClick={() => setActiveTab('collection')}>کالکشن</button>
                    <button className={`px-4 py-2 text-gray-400 ${activeTab === 'portfilio' ? '!text-black' : ''}`} onClick={() => setActiveTab('portfilio')}>نمونه کار</button>
                </div>
                <div>
                    {activeTab === 'about' && (
                        <div className="p-5 lg:grid lg:grid-cols-[22%_70%] lg:gap-10 px-8">
                            <ProfileCard name={"هانیه رضایی"} email={"hanirezaee@gmail.com"} site={"www.wonkapost.ir"} locaion={"خراسان رضوی ، مشهد"}  date={"1401/01/12"} />
                            <p className="text-justify">
                                {/* محل واردن کردن متن درباره ما  */}
                            </p>
                        </div>
                    )}

                    {activeTab === 'collection' && (
                        <div className="p-5 lg:grid lg:grid-cols-[21%_75%] lg:gap-10 px-8">
                            <ProfileCard name={"هانیه رضایی"} email={"hanirezaee@gmail.com"} site={"www.wonkapost.ir"} locaion={"خراسان رضوی ، مشهد"} date={"1401/01/12"} />
                            <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-2 ">
                                {/* محل وارد کردن نمونه های کار  */}
                                <SampleCard img={A} title="طراحی سایت" date="1404/01/12" />
                                  
                            </div>
                        </div>
                    )}


                    {activeTab === 'portfilio' && (
                        <div className="p-5 lg:grid lg:grid-cols-[22%_70%] lg:gap-10 px-8">
                            <ProfileCard name={"هانیه رضایی"} email={"hanirezaee@gmail.com"} site={"www.wonkapost.ir"} locaion={"خراسان رضوی ، مشهد"} date={"1401/01/12"} />
                            <div>

                            </div>

                        </div>
                    )}

                </div>

            </div>
        </>

    )
}