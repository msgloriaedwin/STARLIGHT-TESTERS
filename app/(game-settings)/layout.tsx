
import "../globals.css";
import { SidebarComp } from "../components/settings/sidebar";
import SettingsHeader from "../components/settings/header";


export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='bg-primary'>
       <SettingsHeader />
       <div className="md:flex gap-3 bg-secondary-cream min-h-screen">

       <SidebarComp />
         <div className="w-full md:w-3/4 md:!ml-[350px] pt-20">
            {children}
         </div>
       </div>

     </main>
    )
}