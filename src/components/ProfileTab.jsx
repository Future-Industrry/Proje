import { useState } from "react"
import ProfileCard from "./ProfileCard"
import SampleCard from "./SampleCard"
import A from '../assets/images/banner-06.png'
export default function ProfileTab() {
    const [activeTab, setActiveTab] = useState('about')
    return (
        <>
            <div className="w-full h-24 bg-yellow-200"></div>
            <div className="w-full mx-auto ">
                <div className="flex justify-between border-b border-gray-300 mb-4 lg:justify-end lg:gap-[20%] lg:pl-20">
                    <button className={`px-4 py-2 text-midnight ${activeTab === 'about' ? '!text-black' : ''}`} onClick={() => setActiveTab('about')}>درباره ما</button>
                    <button className={`px-4 py-2 text-midnight ${activeTab === 'collection' ? '!text-black' : ''}`} onClick={() => setActiveTab('collection')}>کالکشن</button>
                    <button className={`px-4 py-2 text-midnight ${activeTab === 'portfilio' ? '!text-black' : ''}`} onClick={() => setActiveTab('portfilio')}>نمونه کار</button>
                </div>
                <div>
                    {activeTab === 'about' && (
                        <div className="p-5 lg:grid lg:grid-cols-[22%_70%] lg:gap-10 px-8">
                            <ProfileCard name={"هانیه رضایی"} email={"hanirezaee@gmail.com"} site={"www.wonkapost.ir"} locaion={"خراسان رضوی ، مشهد"}  date={"1401/01/12"} />
                            <p className="text-justify
                            ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eum itaque temporibus hic autem doloribus animi fugit expedita corrupti, reprehenderit quidem magnam, laborum veniam. Earum quam veniam blanditiis sed eveniet!
                                Neque accusamus numquam aliquid fuga harum! Maxime accusantium mollitia error sapiente. Similique libero velit reprehenderit obcaecati, vero voluptatibus laboriosam vitae dolorum quo, pariatur facere tenetur doloremque </p>
                        </div>
                    )}

                    {activeTab === 'collection' && (
                        <div className="p-5 lg:grid lg:grid-cols-[22%_70%] lg:gap-10 px-8">
                            <ProfileCard name={"هانیه رضایی"} email={"hanirezaee@gmail.com"} site={"www.wonkapost.ir"} locaion={"خراسان رضوی ، مشهد"} date={"1401/01/12"} />
                            <div className="grid grid-cols-[60%]  md:grid-cols-[45%_45%]  lg:grid-cols-[45%_45%] ">
                                <SampleCard img={A} title="طراحی سایت" date="1404/01/12" />
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