
export default function SampleCard({img,title,date}){
    return (
        
        <div className="w-90 md:w-90 lg:w-96  lg:h-64  mx-auto  mb-5 text-sm ">
            <img src={img} alt="" className=" lg:h-56 h-48 lg:w-full md:w-80"/>
            <div className='flex justify-between mt-2'>
                <h1>{title}</h1>
                <h1>{date}</h1>
            </div>
        </div>
    )
}