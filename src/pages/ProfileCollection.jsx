import ProfileCard from "../components/ProfileCard"
import Profile from "../components/Profile"
import Imgsample from '../assets/images/banner-06.png'
function ProfileCollection() {
    return (
        <div>
            <Profile></Profile>
            <div className=" mr-96 my-10 text-justify ml-20 grid grid-cols-2 gap-4">
                <ProfileCard img={Imgsample} title="طراحی صفحات وب" date="1384/01/12"></ProfileCard>
                
            </div>
        </div>
    )
}
export default ProfileCollection