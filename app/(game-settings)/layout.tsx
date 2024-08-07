import "../globals.css";
import { SidebarComp } from "../components/settings/sidebar";
import SettingsHeader from "../components/settings/header";

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='bg-[#F7EEE7]'>
       <SettingsHeader />
       <div className="md:flex gap-3 bg-[#F7EEE7] min-h-screen">

       <SidebarComp />
         <div className="w-full md:w-3/4 md:!ml-[200px] lg:!ml-[350px] pt-20">
            {children}
         </div>
       </div>

     </main>
    )
}
