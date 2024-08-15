"use client"
import Image from "next/image";
import { ExpandMoreIcon, UserIcon } from "./components/icons";
import { adminSideNavLinks } from "./data";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import AdminNavbar from "./components/admin-navbar";
import AdminSideNavbar from "./components/admin-side-navbar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div>
            <AdminNavbar />
            <div className="flex" style={{ height: "calc(100vh - 100px)" }}>
                <AdminSideNavbar />
                <div className="px-[24px] py-[32px] bg-white flex-1 overflow-y-auto">
                    <div>{children}</div>
                </div>
            </div>
        </div>
    );
}