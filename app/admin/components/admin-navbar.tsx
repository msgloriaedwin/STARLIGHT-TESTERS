import Image from "next/image";
import { ExpandMoreIcon, UserIcon } from "../icon";

export default function AdminNavbar() {

    return (
        <nav
            className="px-[20px] lg:px-[80px] h-[100px] bg-no-repeat flex items-center justify-between"
            style={{ "background": "linear-gradient(to bottom, #f7eee7 10%, #f9e9a3 100%)" }}
        >
            <figure>
                <Image
                    src="/logo/remote-bingo.png"
                    alt="Remote Bingo Logo"
                    width="113"
                    height="46"
                />
            </figure>
            <div className="flex gap-[12px] items-center">
                <button
                    style={{
                        boxShadow:
                            'inset -2px -2px 0px 1px #00658B, inset 2px 2px 0px 0.2px #58D1FF'
                    }}
                    className="flex items-center gap-[10px] py-[14px] px-[16px] rounded-[8px] bg-primary-blue h-[48px] text-white"
                >
                    <UserIcon />
                    Mark
                    <ExpandMoreIcon className="fill-[#D5F3FF]" />
                </button>
                <Image
                    src="/admin/profile-picture.png"
                    alt="Profile Pic"
                    width="48"
                    height="48"
                    className="rounded-full"
                />
            </div>
        </nav>
    )
}