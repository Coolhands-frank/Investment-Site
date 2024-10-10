
import Sidebar from "../../components/DashboardComponents/Sidebar"

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 flex-grow p-6">
        {children} 
      </div>
    </div>
  );
}