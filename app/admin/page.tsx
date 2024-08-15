import { cn } from "@/lib/utils";
import { CalenderIcon, ClipboardIcon, ExpandMoreIcon, MoreVertsIcon, TrendupIcon } from "./components/icons";
import { bangers, dmSans } from "@/lib/fonts";
import { gamesData, overviewData } from "./data";
import OverviewCard from "./components/overview-card";
import Image from "next/image";

export default function Admin() {

    return (
        <div>
            <header className="mb-[32px]">
                <div className={cn("text-[36px] font-extrabold", bangers.className)}>Dashboard</div>
                <p className={cn("text-[#00222E]", dmSans.className)}>Monitor games, player engagement, and revenue</p>
            </header>
            <div className="mb-[16px]">
                <button className="px-[12px] py-[11px] border-[#cbd5e1] border-[1px] rounded-[6px] flex items-center justify-between w-[198px]">
                    <div className="flex items-center gap-[6px]">
                        <CalenderIcon />
                        <p className="text-[#0F172A] text-[14px] leading-[14px]">Today</p>
                    </div>
                    <ExpandMoreIcon />
                </button>
            </div>
            <div className="grid grid-cols-3 gap-[24px] mb-[48px]">
                {
                    overviewData.map((data, index) => (
                        <OverviewCard
                            key={index}
                            title={data.title}
                            value={index === 2 ? formatNumber(data.value) : data.value}
                            percentage={data.percentage}
                        />
                    ))
                }
            </div>
            <div className={cn("flex items-center justify-between mb-[24px]", dmSans.className)}>
                <div className="text-[24px] font-bold text-[#525252]">On going games</div>
                <span className="text-[#525252] font-medium">
                    View All <span className="text-[#00222E]">(24)</span>
                </span>
            </div>
            <div className="grid grid-cols-3 gap-[24px]">

                {
                    gamesData.map((data, index) => (
                        <div key={index} className="border-[1px] border-[#cbd5e1] rounded-[6px] p-[16px] w-full min-h-[266px]">
                            <div className="flex justify-between items-center mb-[24px]">
                                <div className="flex items-center gap-[6px]">
                                    <ClipboardIcon />
                                    <span>{data.id}</span>
                                </div>
                                <MoreVertsIcon />
                            </div>
                            <div className="flex items-center justify-between mb-[24px] text-[14px]">
                                <p className="text-[#5F5F5F]">Game type:</p>
                                <span className={cn(data.gameType === "Numbers" ? "text-[#FF5722]" : 'text-[#00A8E8]')}>{data.gameType}</span>
                            </div>
                            <div className="flex items-center justify-between mb-[24px] text-[14px]">
                                <p className="text-[#5F5F5F]">Price:</p>
                                <span className={cn(data.gameType === "Numbers" ? "text-[#FF5722]" : 'text-[#00A8E8]')}>$345</span>
                            </div>
                            <div className="mb-[24px]">
                                <div className="flex items-center justify-between mb-[18px] text-[14px]">
                                    <p className="text-[#5F5F5F]">Progress:</p>
                                    <span className="text-[#202020]">{data.progress}%</span>
                                </div>
                                <div className="h-[3px] w-full bg-[#d9d9d9]">
                                    <div style={{ width: `${data.progress}%`}} className={cn("h-full", data.gameType === "Alphabets" ? 'bg-[#00A8E8]' : 'bg-[#FF5722]')}></div>
                                </div>
                            </div>
                            <div className="flex gap-[5px] mb-[32px]">
                                {
                                    [1, 2, 3, 4, 5, 6, 1, 2, 3].map((data, index) => (
                                        <Image
                                            key={index}
                                            src={`/admin/user-${data}.png`}
                                            width={24}
                                            height={24}
                                            alt="User profile pic"
                                        />
                                    ))
                                }
                            </div>
                            <div className="flex items-center justify-between text-[14px]">
                                <p className="text-[#5F5F5F]">Date created:</p>
                                <span className="text-[#202020]">13-08-24, 7:45am</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

function formatNumber(number: number) {
    return new Intl.NumberFormat('en-US', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(number);
}