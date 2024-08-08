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
         <div className=" pt-20 md:!ml-[250px] lg:!ml-[382px]">
            {children}
         </div>
       </div>

     </main>
    )
}
