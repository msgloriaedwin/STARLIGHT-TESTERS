import SettingsHeader from "../components/settings/header";
import { SidebarComp } from "../components/settings/sidebar";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <main>
     <SettingsHeader />
     <div className="md:flex gap-3 bg-primary min-h-screen !bg-[#F7EEE7]">

     <SidebarComp />
       <div className="w-full md:w-3/4">
          {children}
       </div>
     </div>

   </main>
  );
}
