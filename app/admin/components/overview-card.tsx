import { cn } from "@/lib/utils";
import { MoreVertsIcon, TrendupIcon } from "../icon";
import { bangers } from "@/lib/fonts";

interface OverviewCardProperties {
    title: string;
    value: number | string;
    percentage: number;
}
export default function OverviewCard({value, percentage, title}: OverviewCardProperties) {

    return (
        <div className="border-[1px] border-[#cbd5e1] rounded-[6px] p-[16px] w-full min-h-[150px]">
            <div className="flex justify-between items-center mb-[12px]">
                <h2>{title}</h2>
                <MoreVertsIcon />
            </div>
            <div className={cn("text-[36px] font-extrabold mb-[24px]", bangers.className)}>
                {value}
            </div>
            <div className="text-[14px] flex">
                <TrendupIcon />
                <span className="ml-[4px] text-[#4CAF50]">{percentage}%</span>
                <p className="ml-2 text-[#5F5F5F]">Compared to <span className="text-[#00222E]">previous day</span></p>
            </div>
        </div>
    )
}