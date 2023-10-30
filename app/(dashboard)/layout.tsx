import NavBar from "./_components/navbar";
import Sidebar from "./_components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div className="h-full">
        <div className="h-[80px] w-full md:pl-56 fixed inset-y-0 z-50">
          <NavBar />
        </div>
        <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
          <Sidebar />
        </div>
        <main className="md:pl-56 pt-[80px] h-full">{children}</main>
      </div>
    </main>
  );
};

export default DashboardLayout;
