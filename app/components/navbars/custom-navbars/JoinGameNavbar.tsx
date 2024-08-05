import Image from "next/image"
import user from "../asset/user.png"
import { ArrowLeft, ChevronDown, Link, Menu, UserRound } from "lucide-react"
import Navbar from "../Navbar"
import { useState } from "react"
import { useRouter } from "next/navigation"

type PageProps = {
    handleGoBack: () => void;
    handleShareGameLink: () => void;
}

const JoinGameNavbar = ({ handleShareGameLink }: PageProps) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const router = useRouter()

    const handleShowMenu = () => {
        menuIsOpen === false ? setMenuIsOpen(true) : setMenuIsOpen(false);
    };
    const handleHowToPlayClick = () => {
        //handle form display
        console.log("clicked how to play");
    }


    return (
        <div className="w-full">
            <Navbar className="flex justify-between bg-body z-[999] fixed top-0 left-0">
                <div className="flex md:hidden justify-between items-center bg-transparent">
                    <Image src={user} alt="user" />
                </div>
                {menuIsOpen === false ? <button onClick={() => handleShareGameLink()} className="flex md:hidden items-center shadow-custom-inset bg-button-light-main rounded-[8px] gap-2 text-extra-small text-black justify-center py-[12px] px-4">
                    <span>Share game link</span>
                    <span><Link size={"14px"} /></span>
                </button> : ""}
                <div className="md:flex hidden items-center gap-4">
                    <button onClick={() => router.back()} className="flex items-center border rounded-[8px] gap-[.5em] border-textColor-main justify-center py-2 px-4 outline-1">
                        <span><ArrowLeft color="#00658b " /></span>
                        <span className="text-textColor-main">Back</span>
                    </button>
                </div>
                <div className="flex gap-6 items-center">
                    <button onClick={() => handleShareGameLink()} className="md:flex hidden items-center shadow-custom-inset bg-button-light-main rounded-[8px] gap-2 text-small text-black justify-center py-2 px-4">
                        <span>Share game link</span>
                        <span><Link size={"14px"} /></span>
                    </button>
                    <button onClick={(e) => {
                        e.preventDefault()
                        handleShowMenu()
                    }} className="flex md:hidden shadow-custom-inset items-center bg-[#00658B] border rounded-[8px] gap-[.5em] border-[#00658B] text-white justify-center py-[12px] md:py-[10px] px-4 outline-1">
                        <Menu />
                    </button>
                </div>
            </Navbar>
            {menuIsOpen === true ? <ul className="w-[100%] z-[995] md:hidden fixed top-[85px] flex gap-4 pt-[50px] flex-col min-h-[90vh] bg-white p-4 rounded-lg">
                <div className="flex flex-col gap-4">
                    <p onClick={handleHowToPlayClick} className="text-textColor-main self-center cursor-pointer flex">How to play</p>
                    <button onClick={() => handleShareGameLink()} className="flex items-center shadow-custom-inset bg-button-light-main rounded-[8px] gap-2 text-small text-black justify-center py-2 px-4">
                        <span>Share game link</span>
                        <span><Link size={"14px"} /></span>
                    </button>
                </div>
            </ul> : ""}
        </div>
    )
}

export default JoinGameNavbar
