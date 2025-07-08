
export default function SampleCard({img,title,date}){
    return (
        <div className="bg-red-300">
            <img src={img} alt="" />
            <div className='flex justify-between mt-2'>
                <h1>{title}</h1>
                <h1>{date}</h1>
            </div>
        </div>
    )
}