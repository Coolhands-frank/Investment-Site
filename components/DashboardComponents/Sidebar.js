import Profile from './UserProfile'
import NavLinks from './NavLinks'


export default function SideBar() {

    return (
        <div className="h-full flex flex-col items-center justify-center px-4">
            <h1 className="font-black text-lg lg:text-xl text-orange-100">Krane Finance</h1>
            <Profile />
            <NavLinks />
        </div>
    )
}