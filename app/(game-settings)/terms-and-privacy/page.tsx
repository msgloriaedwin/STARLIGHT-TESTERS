import { DM_Sans } from "next/font/google";
import { useTranslations } from 'next-intl';

const dm_sans = DM_Sans({
	subsets: ["latin"],
})

const TermsAndService = () => {
	const t = useTranslations('termsAndService');
	return (
		<div
			className={`${dm_sans.className} pt-[-4rem]  md:pt-14 flex flex-col gap-16 font-["dm_sans"] p-6`}>
			<h1 className="text-primary-700 text-[2.25rem] leading-[2.875rem] inline-block">
				{t('title')}
			</h1>
			<div className="max-w-[26rem] w-full flex flex-col gap-6 ">
				<div className="flex flex-col gap-2">
					<h2 className="text-primary-900 font-bold leading-[120%] text-2xl">
					{t('termsAndConditionsTitle')}
					</h2>
					<p className="md:text-lg text-base text-neutral-700 leading-[1.875rem] ">
					 {t('termsAndConditionsContent')}
					</p>
				</div>
				<div className="flex flex-col gap-2">
					<h2 className="text-primary-900 font-bold leading-[120%] text-2xl">
						{t('privacyPolicyTitle')}
					</h2>
					<p className="md:text-lg text-base text-neutral-700 leading-[1.875rem]">
						 {t('privacyPolicyContent')}
					</p>
				</div>
			</div>
		</div>
	)
}
export default TermsAndService
