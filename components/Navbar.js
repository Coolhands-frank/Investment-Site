'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import DesktopNavLinks from './NavComponents/DesktopNavLinks';
import MobileDrawer from './NavComponents/MobileDrawer';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const Navbar = () => {

  const [isToggleDrawer, setIsToggleDrawer] = useState(false)
  
  const handleDrawerToggle = () => {
    setIsToggleDrawer(!isToggleDrawer);
  };

  const pathname = usePathname()
  const isHome = pathname === "/";
  const noNavRoutes = ['/dashboard'];

  if (noNavRoutes.includes(pathname)) {
    return null; // Do not render the Navbar on this route
  }

  return (
    <>
      <div className="hidden md:block">
        <DesktopNavLinks />
      </div>

      <div className={`md:hidden flex flex-row justify-between items-center px-8 py-4 ${isHome ? "text-orange-500" : "text-white bg-orange-500"}`}>
        <div className="font-black text-2xl ">
          <Link href="/">
            KraneFinance
          </Link>
        </div>
        <button className="" onClick={handleDrawerToggle}>
          <FontAwesomeIcon className="text-4xl" icon={faBars} />
        </button>
        <MobileDrawer isOpen={isToggleDrawer} onClose={handleDrawerToggle} />
    </div>
    </>
  );
};

export default Navbar;
