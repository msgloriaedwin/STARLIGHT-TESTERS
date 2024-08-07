import { DM_Sans } from "next/font/google"

const dm_sans = DM_Sans({
	subsets: ["latin"],
})


const TermsAndService = () => {
	return (
		<div
			className={`${dm_sans.className} relative top-[-4rem]  md:top-8 flex flex-col gap-16 font-["dm_sans"] p-6`}>
			<h1 className="text-primary-700 text-[2.25rem] leading-[2.875rem] inline-block">
				Terms & Privacy
			</h1>
			<div className="max-w-[25rem] w-full flex flex-col gap-6 ">
				<div className="flex flex-col gap-2">
					<h2 className="text-primary-900 font-semibold leading-[120%] text-2xl">
						Terms & Conditions
					</h2>
					<p className="md:text-lg text-base text-neutral-700 leading-[1.875rem] ">
						By using Bingo Game Website, you agree to these terms. Key points:
						You must be 16+ years old. Use services fairly and follow rules. We
						own all content and IP. Privacy Policy applies. We can suspend or
						terminate accounts for violations. Services are &quot;as is&quot;
						without warranties. Contact us: customercare@bingo.com.
					</p>
				</div>
				<div className="flex flex-col gap-2">
					<h2 className="text-primary-900 font-semibold leading-[120%] text-2xl">
						Privacy Policy
					</h2>
					<p className="md:text-lg text-base text-neutral-700 leading-[1.875rem]">
						Welcome to Bingo Game Website! We value your privacy. We collect and
						use data to improve services, share with consent, and comply with
						laws. Contact us at customercare@bingo.com with questions.
					</p>
				</div>
			</div>
		</div>
	)
}
export default TermsAndService
