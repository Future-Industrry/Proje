import img from '../assets/images/banner-03.png'
import User from '../assets/images/User.jpg'
import Basket from '../assets/images/basket.svg'
import Heart from '../assets/images/heart.svg'
import Receive from '../assets/images/receive.svg'
import Save from '../assets/images/save.svg'

export default function ProductDetails() {
    return (
        <div className='p-7 space-y-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <img src={img} alt="" className='w-full h-80 rounded-md' />
                <div className='space-y-5'>
                    <div className='mt-12 flex items-center justify-between md:mt-0'>
                        <div className='flex items-center gap-4'>
                            <img src={User} alt="" className='w-14 h-14 rounded-full' />
                            <h1 className='font-IranYekanBold'>سهیل شکریان</h1>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <img src={Receive} alt="" className='bg-primary p-1 rounded-full size-7' />
                            <img src={Heart} alt="" className='bg-primary p-1 rounded-full size-7' />
                            <img src={Save} alt="" className='bg-primary p-1 rounded-full size-7' />
                        </div>
                    </div>
                    <h1>طراحی کارت بانکی</h1>
                    <p className='text-justify text-second-light font-IranYekanBold'>توضیحات بیشتر پروژه ی خود را در این قسمت تایپ کنید توضیحات بیشتر پروژه توضیحات کامل تر درباره پروژه توضیحات کامل تر درباره پروژه توضیحات کامل تر درباره پروژه توضیحات کامل تر درباره پروژه توضیحات کامل تر درباره پروژه</p>
                    <div className='flex gap-2 text-sm text-white'>
                        <p className='bg-second-light px-2 rounded-md'>کامپیوتر</p>
                        <p className='bg-second-light px-2 rounded-md'>طراحی سایت</p>
                        <p className='bg-second-light px-2 rounded-md'>طراحی</p>
                        <p className='bg-second-light px-2 rounded-md'>فتوشاپ</p>
                    </div>
                    <div className='flex justify-between mt-10 items-center md:mt-5'>
                        <p className='text-primary font-IranYekanBold'>1/450/000تومان</p>
                        <div className='flex gap-2 items-center bg-primary p-1 rounded-md text-white text-sm'>
                            <img src={Basket} alt="" className='size-6' />
                            سبدخرید
                        </div>
                    </div>
                </div>
            </div>

            <h1>توضیحات تکمیلی درباره پروژه</h1>
            <p className='text-justify text-second-light mb-24'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis libero odit repellat nulla repellendus accusamus dolores doloribus incidunt recusandae, eius soluta, autem perspiciatis ratione sunt? Quos iste nemo eius libero.
                Nesciunt pariatur fugit magni ad voluptatibus quos architecto consequuntur saepe nemo! Architecto mollitia incidunt reprehenderit nobis, eligendi officiis eos iste asperiores esse natus odio? Numquam expedita qui laboriosam voluptatum ipsum.
                Harum id voluptate magni quidem modi excepturi alias beatae minus necessitatibus esse itaque iure eum omnis vel nobis, sint nostrum deserunt quo sit inventore autem, in dolore! Officiis, similique alias.
            </p>
            <h1 className='font-IranYekanBold'>نظرات</h1>
            <div className='w-full border-1 border-second-light rounded-md h-9 md:w-96'>
                <input type="text" className='p-1 ' placeholder='نظر خود را وارد کنید...' />

            </div>
            <hr className='text-second-light mt-14' />
            <img src={User} alt="" className='w-16 h-16 rounded-full absolute  left-1/2 transform -translate-x-1/2  -mt-12 border-8 border-white md:w-20 md:h-20 md:-mt-16' />
            <h1 className='text-center mt-10'>سهیل شکریان</h1>
            <div className='flex justify-center'>
                <p className='text-[12px] bg-primary p-1 rounded-md cursor-pointer'>نمایش پروفایل</p>

            </div>
            <h1 className='mt-16 font-IranYekanBold'>پروژه های مشابه</h1>
            <div className='grid grid-cols-2 gap-y-10 gap-x-5 md:grid-cols-4'>
                <div className='space-y-3'>
                    <img src={img} alt="" className='w-full h-48 rounded-md' />
                    <h1 className='font-IranYekanBold'>عنوان پروژه</h1>
                    <p className='text-sm text-second-light'>توضیحات کامل تر درباره پروژه توضیحات کامل تر درباره پروژه توضیحات کامل تر </p>
                </div>
                <div className='space-y-3'>
                    <img src={img} alt="" className='w-full h-48 rounded-md' />
                    <h1 className='font-IranYekanBold'>عنوان پروژه</h1>
                    <p className='text-sm text-second-light'>توضیحات کامل تر درباره پروژه توضیحات کامل تر درباره پروژه توضیحات کامل تر </p>
                </div>
                <div className='space-y-3'>
                    <img src={img} alt="" className='w-full h-48 rounded-md' />
                    <h1 className='font-IranYekanBold'>عنوان پروژه</h1>
                    <p className='text-sm text-second-light'>توضیحات کامل تر درباره پروژه توضیحات کامل تر درباره پروژه توضیحات کامل تر </p>
                </div>
                <div className='space-y-3'>
                    <img src={img} alt="" className='w-full h-48 rounded-md' />
                    <h1 className='font-IranYekanBold'>عنوان پروژه</h1>
                    <p className='text-sm text-second-light'>توضیحات کامل تر درباره پروژه توضیحات کامل تر درباره پروژه توضیحات کامل تر </p>
                </div>
            </div>
            <h1 className='font-IranYekanBold mt-20'>مقالات</h1>
            <div className='grid grid-cols-2 gap-y-10 gap-x-5 md:grid-cols-4'>
                <div className='space-y-3 shadow'>
                    <img src={img} alt="" className='h-48 rounded-md w-full' />
                    <h1 className='font-IranYekanBold px-2'>عنوان پروژه</h1>
                    <p className='text-sm text-second-light p-2'>توضیحات کامل تر درباره پروژه توضیحات کامل تر درباره پروژه توضیحات کامل تر </p>
                </div>
                <div className='space-y-3 shadow'>
                    <img src={img} alt="" className=' h-48 rounded-md w-full' />
                    <h1 className='font-IranYekanBold px-2'>عنوان پروژه</h1>
                    <p className='text-sm text-second-light p-2'>توضیحات کامل تر درباره پروژه توضیحات کامل تر درباره پروژه توضیحات کامل تر </p>
                </div>
                <div className='space-y-3 shadow '>
                    <img src={img} alt="" className=' h-48 rounded-md w-full' />
                    <h1 className='font-IranYekanBold px-2'>عنوان پروژه</h1>
                    <p className='text-sm text-second-light p-2'>توضیحات کامل تر درباره پروژه توضیحات کامل تر درباره پروژه توضیحات کامل تر </p>
                </div>
                <div className='space-y-3 shadow '>
                    <img src={img} alt="" className=' h-48 rounded-md w-full' />
                    <h1 className='font-IranYekanBold px-2'>عنوان پروژه</h1>
                    <p className='text-sm text-second-light p-2'>توضیحات کامل تر درباره پروژه توضیحات کامل تر درباره پروژه توضیحات کامل تر </p>
                </div>
            </div>

        </div>
    )
}