import User from '../assest/images/user.jpg'
import Verify from '../assest/images/verify.svg'
import Email from '../assest/images/sms.svg'
import Location from '../assest/images/location.svg'
import Global from '../assest/images/global.svg'
import Stickynote from '../assest/images/stickynote.svg'
import Whatsapp from '../assest/images/whatsapp.svg'
import Instagram from '../assest/images/instagram.svg'
import Facebook from '../assest/images/facebook.svg'
export default function ProfileCard({ name, email, site, locaion, date }) {
    return (
        <>
            <div className='w-[100%] lg:full '>
                <div className='w-full bg-white mx-auto border-1 border-gray-300 rounded-2xl relative mt-10 px-3  lg:-mt-30'>
                    <div className='absolute top-0 left-1/2 transform -translate-x-1/2  -mt-12 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:mt-20'>
                        <img src={User} alt="" className='w-24 h-24 rounded-full border-white shadow object-cover border-4 lg:w-28 lg:h-28' />
                    </div>
                    <div className='mt-14 mx-auto flex mb-8 lg:mt-36'>
                        <div className='flex gap-2 mx-auto'>
                            <img src={Verify} alt="" />
                            <h2>{name}</h2>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-x-10 gap-y-6 mt-4 lg:grid-cols-1 lg:pr-4'>
                        <div className='flex gap-2 items-center  '>
                            <img src={Email} alt="" className='size-5' />
                            <p className=' text-sm text-midnight'>{email}</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <img src={Global} alt="" className='size-5' />
                            <p className=' text-sm text-midnight'>{site}</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <img src={Location} alt="" className='size-5' />
                            <p className=' text-sm text-midnight'>{locaion}</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <img src={Stickynote} alt="" className='size-5' />
                            <p className=' text-sm text-midnight'>{date + " عضویت"}</p>
                        </div>
                    </div>
                    <div className='mt-10 mx-auto flex mb-4 lg:mt-20'>
                        <div className='flex gap-2 mx-auto items-center bg-yellow rounded-lg px-3 py-1'>
                            <img src={Location} alt="" className='size-5' />
                            <p className='text-sm text-yellow-600'>درخواست</p>
                        </div>
                    </div>
                </div>
                <div className='mt-5  w-full '>
                    <div className='mx-auto  bg-yellow flex gap-5 justify-center  py-1 rounded-lg mb-10 lg:py-2'>
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