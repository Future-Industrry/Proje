import User from '../assets/images/User.jpg'
import Global from '../assets/images/global.svg'
import Verify from '../assets/images/verify.svg'
import Sms from '../assets/images/sms.svg'
import Location from '../assets/images/location.svg'
import Note from '../assets/images/stickynote.svg'
import Fasebook from '../assets/images/facebook.svg'
import Instagram from '../assets/images/instagram.svg'
import Whatsapp from '../assets/images/whatsapp.svg'
import { NavLink } from "react-router-dom"
function Profile({ name="امیر علیخانی", email="amiralikhani@gmail.com", website="www.wonka.ir", date="1400/01/27", location="مشهد" }) {
    return (
        <div>
            <div className="h-screen w-84 py-20 absolute px-10 space-y-2 font">
                <div className="h-[95%] border-1 border-gray-300 rounded-3xl w-full flex gap-3 flex-col py-10 px-5  bg-white">
                    <div className='text-center mb-5 flex flex-col items-center gap-3'>
                        <img src={User} alt="" className=' size-28 rounded-full items-center' />
                        <div className='flex items-center gap-2 font-IranMedium'>
                            <img className='size-4' src={Verify} />
                            {name}
                        </div>
                    </div>
                    <div className='flex items-center gap-2 text-sm'>
                        <img className='size-4' src={Sms} />
                        {email}
                    </div>
                    <div className='flex items-center gap-2 text-sm'>
                        <img className='size-4' src={Global} />
                        {website}

                    </div>
                    <div className='flex items-center gap-2 text-sm'>
                        <img className='size-4' src={Note} />
                        {date}
                    </div>
                    <div className='flex items-center gap-2 text-sm'>
                        <img className='size-4' src={Location} />
                        {location}
                    </div>
                    <div className='mt-10 flex justify-center text-sm '>
                        <div className='flex bg-thirdry  rounded-md p-1 pl-2 text-yellow-500  items-center gap-1'>
                            <img className='size-4' src={Location} />
                            درخواست
                        </div>

                    </div>
                </div>
                <div className='bg-yellow w-full h-10 rounded-2xl flex justify-center items-center gap-2 bg-thirdry'>
                    <img className='size-5' src={Fasebook} alt="" />
                    <img className='size-5' src={Instagram} alt="" />
                    <img className='size-5' src={Whatsapp} alt="" />
                </div>
            </div>
            <div>
                <div className="h-40 bg-amber-300"></div>
                <ul className="flex justify-end pl-72  gap-40 border-b-1 py-3  border-gray-300 font-IranRegular text-gray-500">
                    <li>
                        <NavLink to='/profile'>درباره</NavLink>
                    </li>
                    <li>
                        <NavLink to='/profile/collection'>کالکشن</NavLink>
                    </li>
                    <li>
                        <NavLink to='/profile/sample'>نمونه کار</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Profile