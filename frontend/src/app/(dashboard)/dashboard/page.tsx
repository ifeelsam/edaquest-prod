import MainContent from "../components/MainContent";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row p-5">
      <MainContent />
      <Sidebar />
    </div>
  );
}
