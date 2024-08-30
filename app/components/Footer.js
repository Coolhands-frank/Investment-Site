import Link from 'next/link';
import { plus_jakarta_sans } from "../fonts";
import CustomSelect from './CustomSelect';
import Image from 'next/image';

export default function Footer(){

    return (
        <main className="bg-gray-100 text-sm md:text-base font-bold py-14 px-10 flex flex-col items-center justify-center space-y-8">
            <div className="text-xl md:text-2xl text-orange-500">
                <h1>KraneFinance</h1>
            </div>
            <div>
                <ul className="text-gray-600 flex items-center space-x-10 lg:space-x-14">
                    <li className="hover:text-orange-800 ">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="hover:text-orange-800 ">
                        <Link href="/about">About Us</Link>
                    </li>
                    <li className="hover:text-orange-800 ">
                        <CustomSelect />
                    </li>
                    <li className="hover:text-orange-800 ">
                        <Link href="/contact">Contact Us</Link>
                    </li>
                </ul>
            </div>
            <div className="flex space-x-8">
                <div>
                    <a href="#">
                    <Image
                        src={"/images/Tweeter.png"}
                        width={40}
                        height={40}
                        alt=""
                    />
                    </a>
                </div>
                <div>
                    <a href="#">
                    <Image
                        src={"/images/Instagram.png"}
                        width={40}
                        height={40}
                        alt=""
                    />
                    </a>  
                </div>
                <div>
                    <a href="#">
                    <Image
                        src={"/images/Facebook.png"}
                        width={40}
                        height={40}
                        alt=""
                    />  
                    </a>
                </div>
                <div>
                <   a href="#">
                    <Image
                        src={"/images/Youtube.png"}
                        width={40}
                        height={40}
                        alt=""
                    />  
                    </a>
                </div>
            </div>
            <div className="text-center font-normal text-gray-500">
                <p className={`${plus_jakarta_sans.className}`} style={{maxWidth: "505px"}}>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth</p>
            </div>
        </main>
    )
}