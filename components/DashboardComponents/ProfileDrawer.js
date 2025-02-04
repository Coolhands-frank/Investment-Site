import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Profile from './UserProfile';
import Image from 'next/image';

export default function ProfileDrawer({ isOpen, onClose }) {
    return (
      <div
        className={`fixed flex flex-col z-10 top-0 right-full h-full w-1/2 bg-orange-500 text-black transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/*
        <div className="flex px-12 py-2 justify-between items-center">
            <button className="p-3 text-gray-100" onClick={onClose}>
                <FontAwesomeIcon className="text-xl" icon={faXmark} />
            </button>
        </div>
        */}
        <div className="h-full px-8 flex flex-col justify-center items-center">
            <Profile />
            <div className="border-t-2 pt-6 mt-2 px-4 text-gray-100">
                <ul className="text-xs space-y-4">
                    <li className="" onClick={onClose}>
                        <Link className="flex items-center" href="/dashboard">
                            <Image
                                src={"/images/Monitor.png"}
                                width={16}
                                height={16}
                                alt="overview icon"
                                className="mr-2" 
                            />
                            <p>Overview</p>
                        </Link>
                    </li>

                    <li className="" onClick={onClose}>
                        <Link className="flex items-center" href="#">
                            <Image
                                src={"/images/dialing-numbers.png"}
                                width={16}
                                height={16}
                                alt="withdraw icon"
                                className="mr-2" 
                            />
                            <p>Withdraw</p>
                        </Link>
                    </li> 
                    <li className="" onClick={onClose}>
                        <Link className="flex items-center" href="#">
                            <Image
                                src={"/images/add-dollar.png"}
                                width={16}
                                height={16}
                                alt="invest icon"
                                className="mr-2" 
                            />
                            <p>Invest Funds</p>
                        </Link>
                    </li>
                    <li onClick={onClose}>
                        <Link className="flex items-center" href="#">
                            <Image
                                src={"/images/shopping-cart.png"}
                                width={16}
                                height={16}
                                alt="products image" 
                                className="mr-2"
                            />
                           <p>Products</p>
                        </Link>
                    </li>
                    <li onClick={onClose}>
                        <Link className="flex items-center" href="#">
                            <Image
                                src={"/images/health-graph.png"}
                                width={16}
                                height={16}
                                alt="history image" 
                                className="mr-2"
                            />
                            <p>History</p>
                        </Link>
                    </li>
                    <li onClick={onClose}>
                        <Link className="flex items-center" href="#">
                            <Image
                                src={"/images/Settings.png"}
                                width={16}
                                height={16}
                                alt="settings icon" 
                                className="mr-2"
                            />
                            <p>Settings</p>
                        </Link>
                    </li>
                </ul>

                <Link className="text-xs flex items-center mt-10" href="#" onClick={onClose}>
                    <Image
                        src={"/images/logout-rounded.png"}
                        width={16}
                        height={16}
                        alt="Logout Image" 
                        className="mr-2"
                    />
                    <p>Log Out</p>
                </Link>
            </div>   
        </div>
        
        
      </div>
    );
}