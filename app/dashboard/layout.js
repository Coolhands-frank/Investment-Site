import { poppins } from "../../app/fonts"
import DashboardNavBar from "@/components/DashboardComponents/DashboardNavBar";
import AuthWrapper from "../../components/DashboardComponents/AuthWrapper";

export default function DashboardLayout({ children }) {

  return (
      <main className={`${poppins.className} box-border antialiased md:py-8 bg-orange-500 flex flex-col md:flex-row h-screen`}>
        <AuthWrapper>
          <DashboardNavBar />
          <div className="box-border overflow-auto p-8 md:overflow-hidden drop-shadow-xl md:mr-4 lg:mr-8 md:rounded-xl w-full h-full bg-gray-100">
             {children}
          </div>  
        </AuthWrapper>
      </main>
  );
}