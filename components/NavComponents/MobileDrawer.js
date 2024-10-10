import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function MobileDrawer({ isOpen, onClose }) {
    return (
      <div
        className={`fixed flex flex-col z-10 top-0 right-0 h-full w-full bg-white text-black transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex px-12 py-2 justify-between items-center">
          <div className="text-orange-500 font-black text-2xl">
            <Link href="/">
              KraneFinance
            </Link>
          </div>
            <button className="p-3 text-orange-500" onClick={onClose}>
                <FontAwesomeIcon className="text-5xl" icon={faXmark} />
            </button>
        </div>
        
        <ul className="px-12 flex flex-col space-y-8">
          <li className="text-xl hover:text-orange-900 text-orange-500 hover:font-semibold">
            <Link href="/" onClick={onClose}>Home</Link>
          </li>
          <li className="text-orange-500 text-xl hover:text-orange-900 hover:font-semibold">
            <Link href="/about" onClick={onClose}>About Us</Link>
          </li>
          <li className="text-orange-500 text-xl hover:text-orange-900 hover:font-semibold">
            <Link href="/contact" onClick={onClose}>Contact Us</Link>
          </li>
          <li className="text-orange-500 text-xl hover:text-orange-900 hover:font-semibold">
            <Link href="/services" onClick={onClose}>Services</Link>
          </li>
          <li className="text-orange-500 text-xl hover:text-orange-900 hover:font-semibold">
            <Link href="#">Log in</Link>
          </li>
          <div className="w-full bg-orange-600 rounded-md py-2 flex justify-center items-center">
            <li className="text-orange-100 text-md hover:text-orange-900 hover:font-semibold">
              <Link href="#">Register</Link>
            </li>
          </div>
          
        </ul>
      </div>
    );
  }