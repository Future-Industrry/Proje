
export default function SampleCard({img,title,date}){
    return (
        
        <div className="text-[13px] mb-3">
            <img src={img} alt="" className="h-36 sm:h-40 w-full rounded-3xl"/>
            <div className='flex justify-between mt-2'>
                <h1>{title}</h1>
                <h1>{date}</h1>
            </div>
        </div>
    )
}