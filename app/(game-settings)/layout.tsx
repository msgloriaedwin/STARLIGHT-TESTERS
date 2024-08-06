import "../globals.css";
import { SidebarComp } from "../components/settings/sidebar";
import SettingsHeader from "../components/settings/header";

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-primary">
      <SettingsHeader />
      <div className="md:flex gap-3 bg-primary min-h-screen !bg-[#F7EEE7]">
        <SidebarComp />
        <div className="w-full md:w-3/4 md:ml-auto pt-20">{children}</div>
      </div>
    </main>
  );
}
