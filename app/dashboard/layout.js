import { poppins } from "../../app/fonts"
import SideBar from "../../components/DashboardComponents/Sidebar"

export default function DashboardLayout({ children }) {
  return (
      <main className={`${poppins.className} antialiased px-5 md:px-0 pt-12 pb-8 md:py-8 bg-orange-500 flex flex-col md:flex-row h-screen`}>
        <SideBar />
        <div className="overflow-auto p-6 md:overflow-hidden drop-shadow-xl md:px-8 md:mr-4 lg:mr-8 rounded-xl w-full h-full bg-gray-100">
            {children}
        </div>  
      </main>
  );
}