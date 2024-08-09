"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ArrowLeft, Menu } from "lucide-react"
import Image from "next/image"
export function SidebarComp() {
	const path = usePathname()

	const links = [
		{ href: "/game-settings", label: "Game Settings" },
		{ href: "/profile-settings", label: "Users Settings" },
		{ href: "/terms-and-privacy", label: "Terms & Privacy" },
	]

	const linkClasses = (href: string) =>
		`block py-2 text-[1rem] mb-3 md:mb-7  whitespace-nowrap text-left pr-4 pl-4 md:pr-4 lg:pr-20 rounded-lg sm:rounded-md   ${
			path === href
				? " font-medium text-button-dark-blue bg-button-dark-blue-text  pr-4  md:pr-4 lg:pr-20 text-primary-700 border border-primary-500 bg-primary-100  transition-all duration-300 ease-in delay-200 pl-4 rounded-md border border-[#00A8E8]"
				: "text-[#5F5F5F]"
		}`

	return (
		<>
			{/* MOBILE SIDEBAR */}
			<aside className="block md:hidden">
				<Sheet>
					<header className="flex w-full bg-white items-center justify-between px-5 py-3">
						<div className="flex rounded-md text-[#9F9F9F] border border-[#9F9F9F] items-center gap-x-1 py-2 px-3">
							{" "}
							<ArrowLeft size={16} /> Back
						</div>
						<div>
							<SheetTrigger asChild>
								<button
									style={{
										boxShadow:
											"2px 2px 0px 0px rgba(255, 255, 255, 0.40) inset, -4px -4px 0px 0px rgba(0, 0, 0, 0.32) inset",
									}}
									className="!bg-[#00658B] !text-sm rounded-lg  h-10 px-2 text-white   flex items-center gap-x-2">
									{" "}
									<Menu />
								</button>
							</SheetTrigger>
						</div>
					</header>

					<SheetContent className="bg-white">
						<hr className="block md:hidden mt-[3.2rem] border-0 h-[1.2px] w-full !bg-black/50" />
						<ul className="pt-10 !bg-[#F7EEE7] h-screen px-14">
							{links.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className={linkClasses(link.href)}
										passHref>
										{link.label}
									</Link>
								</li>
							))}
							<div className="mt-[17rem]">
								<li className="text-neutral-700 flex items-center gap-x-3">
									<Image
										src="/assets/icons/logout.svg"
										alt="logout"
										width={17}
										height={17}
									/>
									Logout
								</li>
								<Link
									href="/components/delete-account"
									className="text-error  whitespace-nowrap">
									Delete Account
								</Link>
							</div>
						</ul>
					</SheetContent>
				</Sheet>
			</aside>

			{/* DESKTOP SIDEBAR */}
			<aside className="hidden fixed mt-10 md:w-[250px] lg:w-[382px] min-h-screen md:flex flex-col justify-between pt-24 h-screen z-10 border-r border-r-[#D4D4D4] py-4 pr-6 pl-20">
				<div className="flex h-[90%]  flex-col justify-between">
					<ul className="md:flex flex-col">
						{links.map((link) => (
							<li key={link.href}>
								<Link
									href={link.href}
									className={linkClasses(link.href)}
									passHref>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
					<ul className="flex pl-4 items-start flex-col gap-y-10">
            <Link href="auth/logout-confirmation">
              <li className="text-neutral-700 flex items-center gap-x-3">
                <Image
                  src="/assets/icons/logout.svg"
                  alt="logout"
                  width={17}
                  height={17}
                />
                Logout
              </li>
            </Link>
						<Link
							href="/components/delete-account"
							className="text-error  whitespace-nowrap">
							Delete Account
						</Link>
					</ul>
				</div>
			</aside>
		</>
	)
}
