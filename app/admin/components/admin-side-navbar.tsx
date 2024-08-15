import Link from "next/link";
import { adminSideNavLinks } from "../data";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function AdminSideNavbar() {
    const pathname = usePathname()
    
    return (
        <div className="h-full bg-[#F7EEE7] pl-[24px] lg:pl-[79px] pr-[24px] pt-[70px] w-[382px] flex flex-col gap-[14px]">
            {
                adminSideNavLinks.map((data, index) => (
                    <Link key={index} href={data.href}>
                        <div className={cn("px-[16px] py-[15px] rounded-[8px] w-full", pathname === data.href && "bg-[#ffdd00]")}>{data.title}</div>
                    </Link>
                ))
            }
        </div>
    )
}