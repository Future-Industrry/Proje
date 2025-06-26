function ProfileCard({img,title,date}) {
    return (
        <div className="w-96">
            <img className="w-full h-60" src={img} alt="" />
            <div className='flex justify-between w-full my-2'>
                <p>{title}</p>
                <p>{date}</p>
            </div>
        </div>
    )
}
export default ProfileCard