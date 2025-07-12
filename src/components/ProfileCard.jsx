import User from '../assets/images/User.jpg'
import Verify from '../assets/images/verify.svg'
import Email from '../assets/images/sms.svg'
import Location from '../assets/images/location.svg'
import Global from '../assets/images/global.svg'
import Stickynote from '../assets/images/stickynote.svg'
import Whatsapp from '../assets/images/whatsapp.svg'
import Instagram from '../assets/images/instagram.svg'
import Facebook from '../assets/images/facebook.svg'
export default function ProfileCard({ name, email, site, locaion, date }) {
    return (
        <>
            <div className='w-[100%] lg:full '>
                <div className='w-full bg-white mx-auto border-1 border-gray-300 rounded-2xl relative mt-10 px-2  lg:-mt-30'>
                    <div className='absolute top-0 left-1/2 transform -translate-x-1/2  -mt-12 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:mt-20'>
                        <img src={User} alt="" className='w-24 h-24 rounded-full border-white shadow object-cover border-4 lg:w-28 lg:h-28' />
                    </div>
                    <div className='mt-14 mx-auto flex mb-8 lg:mt-36'>
                        <div className='flex gap-2 mx-auto'>
                            <img src={Verify} alt="" />
                            <h2>{name}</h2>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-x-10 gap-y-6 mt-4 lg:grid-cols-1 lg:pr-4 text-gray-500 text-sm'>
                        <div className='flex gap-2 items-center  '>
                            <img src={Email} alt="" className='size-5' />
                            <p>{email}</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <img src={Global} alt="" className='size-5' />
                            <p>{site}</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <img src={Location} alt="" className='size-5' />
                            <p>{locaion}</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <img src={Stickynote} alt="" className='size-5' />
                            <p>{date + " عضویت"}</p>
                        </div>
                    </div>
                    <div className='mt-10 mx-auto flex mb-4 lg:mt-20'>
                        <div className='flex gap-2 mx-auto items-center bg-thirdry rounded-lg px-3 py-1'>
                            <img src={Location} alt="" className='size-5' />
                            <p className='text-sm text-primary'>درخواست</p>
                        </div>
                    </div>
                </div>
                <div className='mt-5 w-full'>
                    <div className='mx-auto  bg-thirdry flex gap-5 justify-center rounded-lg mb-10 py-2 w-52 lg:w-full'>
                        <img src={Whatsapp} alt="" className='size-5' />
                        <img src={Instagram} alt="" className='size-5' />
                        <img src={Facebook} alt="" className='size-5' />
                        <img src={Global} alt="" className='size-5' />
                    </div>
                </div>
            </div>


        </>

    )
}