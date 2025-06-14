import MainContent from "@/components/TripPageComponents/MainContent";
import Sidebar from "@/components/TripPageComponents/sidebar/Sidebar";

const TripPage = () => {
  return (
    <div className="bg-gray-50">
      <div className="lg:hidden">
        <Sidebar />
        <MainContent />
      </div>

      <div className="hidden lg:flex">
        <div className="w-[700px] h-[calc(100vh-72px)] overflow-y-auto">
          <Sidebar />
        </div>
        <div className="w-full h-[calc(100vh-72px)] overflow-y-auto">
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default TripPage;
