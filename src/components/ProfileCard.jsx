function ProfileCard({img,title,date}) {
    return (
        <div className="w-80">
            <img className="w-full h-52" src={img} alt="" />
            <div className='flex justify-between w-full my-2'>
                <p className="text-sm">{title}</p>
                <p className="text-sm">{date}</p>
            </div>
        </div>
    )
}
export default ProfileCard