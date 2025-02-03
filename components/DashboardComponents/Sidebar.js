import Image from 'next/image'
import Link from 'next/link'
import Profile from './UserProfile'
import Links from './Links'

export default function SideBar() {

    return (
        <div className="hidden h-full py-4 w-80 lg:w-96 text-white md:flex flex-col justify-between items-center">
            <h1 className="font-black text-lg lg:text-xl text-orange-100">Krane Finance</h1>
            <Profile />
            <Links />
        </div>
    )
}